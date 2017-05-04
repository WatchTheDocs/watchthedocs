/*{{!
  
  ------------------
  View example :
  ------------------

  {
    "slides": [
      {
        "duration": 5000,
        "audio": false,
        "show": [
          "# WatchTheDocs Example\n\n&copy; WatchTheDocs.com 2017\n"
        ]
      },
      {
        "duration": 10000,
        "audio": {
          "position": 0,
          "duration": 7000
        },
        "say": [
          "The second slide has a title and one paragraph.",
          "It also has a voice-over."
        ],
        "show": [
          "## Slide 2\n\nThis is the second slide. This text is displayed.\n"
        ]
      }
    ]
  }

}}*/

export default `
{{#slides}}
  <section data-markdown{{#duration}} data-autoslide="{{.}}"{{/duration}}>
    {{#show}}{{.}}
    {{/show}}
    {{#say}}
      <footer class="audio-notes"> {{.}} </footer> 
    {{/say}}
  </section>
{{/slides}}
<section></section>
`
