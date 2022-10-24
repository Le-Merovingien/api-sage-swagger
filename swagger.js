window.onload = function() {
  const ui = SwaggerUIBundle({
    url: "swagger.yaml",
    configUrl: 'config.json',
    dom_id: '#swagger-ui',
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ]
  })

  window.ui = ui
}
