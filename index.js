{
  "title": "xK6 browser demo",
  "description": "Setup xk6 browser and run a demo load test script",
  "details": {
    "intro": {
      "text": "intro.md",
      "background": "setup.sh"
    },
    "steps": [
      {
        "title": "Run the sample load test script",
        "text": "step1/text.md",
      }
    ],
	 "assets": {
      "host01": [
        {"file": "script.js", "target": "/root/go/bin", "chmod": "+w"},
      ]
    }
    "finish": {
      "text": "finish.md"
    }
  },
  "backend": {
    "imageid": "ubuntu"
  }
}
