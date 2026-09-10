package com.kisanq.app;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.res.AssetManager;
import android.graphics.Color;
import android.graphics.Typeface;
import android.net.Uri;
import android.os.Bundle;
import android.view.Gravity;
import android.view.View;
import android.view.Window;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Button;
import android.widget.EditText;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import java.io.InputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class MainActivity extends Activity {
    private WebView webView;
    private ProgressBar progressBar;
    private TextView activeModeLabel;
    
    // Default URLs
    private String local8443Url = "http://172.18.4.173:8443";
    private String mandiServerUrl = "http://172.18.4.173:3000";
    private static final String APP_ORIGIN = "https://kisanq.app";
    private boolean isAttempting8443 = true;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);

        SharedPreferences prefs = getSharedPreferences("kisanq_app", MODE_PRIVATE);
        local8443Url = prefs.getString("local_8443_url", "http://172.18.4.173:8443");
        mandiServerUrl = prefs.getString("mandi_server_url", "http://172.18.4.173:3000");

        LinearLayout mainLayout = new LinearLayout(this);
        mainLayout.setOrientation(LinearLayout.VERTICAL);
        mainLayout.setBackgroundColor(Color.parseColor("#064e3b"));

        // ── TOP NAVIGATION BAR ──
        LinearLayout topBar = new LinearLayout(this);
        topBar.setOrientation(LinearLayout.HORIZONTAL);
        topBar.setGravity(Gravity.CENTER_VERTICAL);
        topBar.setBackgroundColor(Color.parseColor("#064e3b"));
        int padH = (int) (10 * getResources().getDisplayMetrics().density);
        int padV = (int) (6 * getResources().getDisplayMetrics().density);
        topBar.setPadding(padH, padV, padH, padV);

        TextView brandTitle = new TextView(this);
        brandTitle.setText("🌾 KISAN-Q");
        brandTitle.setTextColor(Color.parseColor("#fef08a"));
        brandTitle.setTextSize(15);
        brandTitle.setTypeface(null, Typeface.BOLD);
        topBar.addView(brandTitle);

        activeModeLabel = new TextView(this);
        activeModeLabel.setText(" • 8443");
        activeModeLabel.setTextColor(Color.parseColor("#a7f3d0"));
        activeModeLabel.setTextSize(11);
        topBar.addView(activeModeLabel);

        // Spacer
        View spacer = new View(this);
        LinearLayout.LayoutParams spacerParams = new LinearLayout.LayoutParams(0, 1, 1.0f);
        topBar.addView(spacer, spacerParams);

        // Button 1: Live 8443 App
        Button btn8443 = new Button(this);
        btn8443.setText("⚡ 8443");
        btn8443.setTextSize(11);
        btn8443.setTextColor(Color.parseColor("#022c22"));
        btn8443.setBackgroundColor(Color.parseColor("#fef08a"));
        btn8443.setPadding(14, 4, 14, 4);
        btn8443.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                isAttempting8443 = true;
                activeModeLabel.setText(" • Local 8443");
                webView.loadUrl(local8443Url);
            }
        });
        topBar.addView(btn8443);

        // Button 2: Offline 8443 Bundle
        Button btnOffline = new Button(this);
        btnOffline.setText("💾 Offline");
        btnOffline.setTextSize(11);
        btnOffline.setTextColor(Color.WHITE);
        btnOffline.setBackgroundColor(Color.parseColor("#047857"));
        btnOffline.setPadding(14, 4, 14, 4);
        btnOffline.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                isAttempting8443 = false;
                activeModeLabel.setText(" • Offline");
                webView.loadUrl(APP_ORIGIN + "/index.html");
            }
        });
        topBar.addView(btnOffline);

        // Button 3: Mandi (Port 3000)
        Button btnMandi = new Button(this);
        btnMandi.setText("🛰️ Mandi");
        btnMandi.setTextSize(11);
        btnMandi.setTextColor(Color.WHITE);
        btnMandi.setBackgroundColor(Color.parseColor("#065f46"));
        btnMandi.setPadding(14, 4, 14, 4);
        btnMandi.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                isAttempting8443 = false;
                activeModeLabel.setText(" • Mandi (3000)");
                webView.loadUrl(mandiServerUrl);
            }
        });
        topBar.addView(btnMandi);

        // Button 4: Settings (Gear)
        Button btnSettings = new Button(this);
        btnSettings.setText("⚙️");
        btnSettings.setTextSize(12);
        btnSettings.setTextColor(Color.WHITE);
        btnSettings.setBackgroundColor(Color.parseColor("#064e3b"));
        btnSettings.setPadding(10, 4, 10, 4);
        btnSettings.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                promptServerSettings();
            }
        });
        topBar.addView(btnSettings);

        mainLayout.addView(topBar);

        // ── PROGRESS BAR ──
        progressBar = new ProgressBar(this, null, android.R.attr.progressBarStyleHorizontal);
        progressBar.setLayoutParams(new LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT, 6));
        progressBar.setMax(100);
        progressBar.setVisibility(View.GONE);
        mainLayout.addView(progressBar);

        // ── WEBVIEW CONTAINER ──
        FrameLayout webContainer = new FrameLayout(this);
        LinearLayout.LayoutParams webParams = new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT, 0, 1.0f);
        webContainer.setLayoutParams(webParams);

        webView = new WebView(this);
        webView.setLayoutParams(new FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT));
        webContainer.addView(webView);
        mainLayout.addView(webContainer);

        setContentView(mainLayout);

        setupWebView();
        
        // Start by loading local 8443 app directly
        isAttempting8443 = true;
        activeModeLabel.setText(" • Connecting 8443...");
        webView.loadUrl(local8443Url);
    }

    private void setupWebView() {
        WebSettings s = webView.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setAllowFileAccess(true);
        s.setAllowContentAccess(true);
        s.setUseWideViewPort(true);
        s.setLoadWithOverviewMode(true);
        s.setSupportZoom(false);
        s.setBuiltInZoomControls(false);
        s.setDisplayZoomControls(false);
        s.setCacheMode(WebSettings.LOAD_DEFAULT);
        s.setUserAgentString(s.getUserAgentString() + " KisanQMobileApp/1.0.4 (Port8443)");

        webView.setWebChromeClient(new WebChromeClient() {
            @Override
            public void onProgressChanged(WebView view, int newProgress) {
                if (newProgress < 100) {
                    progressBar.setVisibility(View.VISIBLE);
                    progressBar.setProgress(newProgress);
                } else {
                    progressBar.setVisibility(View.GONE);
                }
            }
        });

        webView.setWebViewClient(new WebViewClient() {
            @Override
            public void onReceivedError(WebView view, WebResourceRequest request, WebResourceError error) {
                if (request.isForMainFrame()) {
                    String failedUrl = request.getUrl().toString();
                    if (isAttempting8443 && failedUrl.contains(":8443")) {
                        isAttempting8443 = false;
                        activeModeLabel.setText(" • Offline (8443)");
                        Toast.makeText(MainActivity.this, "Wi-Fi 8443 offline. Switched to offline app bundle.", Toast.LENGTH_SHORT).show();
                        webView.loadUrl(APP_ORIGIN + "/index.html");
                    }
                }
            }

            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                Uri uri = request.getUrl();
                String host = uri.getHost();
                if ("kisanq.app".equalsIgnoreCase(host)) {
                    String path = uri.getPath();
                    if (path == null || path.isEmpty() || "/".equals(path)) {
                        path = "/index.html";
                    }
                    if (path.startsWith("/")) {
                        path = path.substring(1);
                    }
                    String assetPath = "www/" + path;
                    try {
                        AssetManager am = getAssets();
                        InputStream is = am.open(assetPath);
                        String mime = getMimeType(path);
                        Map<String, String> headers = new HashMap<>();
                        headers.put("Access-Control-Allow-Origin", "*");
                        headers.put("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
                        headers.put("Access-Control-Allow-Headers", "*");
                        return new WebResourceResponse(mime, "UTF-8", 200, "OK", headers, is);
                    } catch (IOException e) {
                        return null;
                    }
                }
                return super.shouldInterceptRequest(view, request);
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                Uri uri = request.getUrl();
                String scheme = uri.getScheme();
                if ("tel".equalsIgnoreCase(scheme) || "mailto".equalsIgnoreCase(scheme)) {
                    try {
                        Intent intent = new Intent(Intent.ACTION_VIEW, uri);
                        startActivity(intent);
                        return true;
                    } catch (Exception e) {
                        return false;
                    }
                }
                return false;
            }
        });
    }

    private void promptServerSettings() {
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setTitle("Configure Server Endpoints");

        LinearLayout layout = new LinearLayout(this);
        layout.setOrientation(LinearLayout.VERTICAL);
        int pad = (int) (16 * getResources().getDisplayMetrics().density);
        layout.setPadding(pad, pad, pad, pad);

        TextView label8443 = new TextView(this);
        label8443.setText("Farmer Mobile App URL (Port 8443):");
        label8443.setTypeface(null, Typeface.BOLD);
        layout.addView(label8443);

        final EditText input8443 = new EditText(this);
        input8443.setText(local8443Url);
        layout.addView(input8443);

        TextView labelMandi = new TextView(this);
        labelMandi.setText("\nMandi Console URL (Port 3000):");
        labelMandi.setTypeface(null, Typeface.BOLD);
        layout.addView(labelMandi);

        final EditText inputMandi = new EditText(this);
        inputMandi.setText(mandiServerUrl);
        layout.addView(inputMandi);

        builder.setView(layout);

        builder.setPositiveButton("Save and Connect 8443", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                local8443Url = input8443.getText().toString().trim();
                mandiServerUrl = inputMandi.getText().toString().trim();
                getSharedPreferences("kisanq_app", MODE_PRIVATE).edit()
                        .putString("local_8443_url", local8443Url)
                        .putString("mandi_server_url", mandiServerUrl)
                        .apply();
                isAttempting8443 = true;
                activeModeLabel.setText(" • Local 8443");
                webView.loadUrl(local8443Url);
            }
        });
        builder.setNegativeButton("Cancel", null);
        builder.show();
    }

    private String getMimeType(String path) {
        String lower = path.toLowerCase();
        if (lower.endsWith(".html") || lower.endsWith(".htm")) return "text/html";
        if (lower.endsWith(".js") || lower.endsWith(".mjs")) return "application/javascript";
        if (lower.endsWith(".css")) return "text/css";
        if (lower.endsWith(".png")) return "image/png";
        if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) return "image/jpeg";
        if (lower.endsWith(".svg")) return "image/svg+xml";
        if (lower.endsWith(".json")) return "application/json";
        if (lower.endsWith(".webp")) return "image/webp";
        if (lower.endsWith(".woff2")) return "font/woff2";
        if (lower.endsWith(".woff")) return "font/woff";
        if (lower.endsWith(".ttf")) return "font/ttf";
        if (lower.endsWith(".ico")) return "image/x-icon";
        return "application/octet-stream";
    }

    @Override
    public void onBackPressed() {
        if (webView != null && webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }
}
