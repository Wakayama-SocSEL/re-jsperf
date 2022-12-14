window.onload = () => {
  window.ui = SwaggerUIBundle({
    url: '../openapi/default.yml',
   dom_id: '#swagger-ui',
   presets: [
     SwaggerUIBundle.presets.apis,
     SwaggerUIStandalonePreset
   ],
   layout: "StandaloneLayout",
 })
}