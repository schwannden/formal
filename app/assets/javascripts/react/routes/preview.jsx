export default class Preview {
  constructor(options) {
    this.updatePreview  = this.updatePreview.bind(this);
    this.preview        = document.getElementById(options.previewId);
    this.buffer         = document.getElementById(options.bufferId);
    this.timeout        = null;
    this.delay          = 1000;
    this.mjRunning      = false;
    this.mjPending      = false;
    this.oldText        = null;
    this.options        = options;
    this.updateCallback = MathJax.Callback(["createPreview", this]);
    this.updateCallback.autoReset = true;
    $("#" + options.inputId).on('keydown, keypress, keyup, input', this.updatePreview);
  }

  swapBuffers() {
    let buffer = this.preview, preview = this.buffer;
    this.buffer = buffer; this.preview = preview;
    buffer.style.visibility = "hidden"; buffer.style.position = "absolute";
    preview.style.position = ""; preview.style.visibility = "";
  }

  updatePreview() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(this.updateCallback, this.delay);
  }

  createPreview() {
    this.timeout = null;
    if (this.mjPending) return;
    var text = document.getElementById(this.options.inputId).value;
    if (text === this.oldtext) return;
    if (this.mjRunning) {
      this.mjPending = true;
      MathJax.Hub.Queue(["createPreview",this]);
    } else {
      this.oldtext = text;
      this.buffer.innerHTML = text.replace(/(?:\r\n|\r|\n)/g, '<br />');
      this.mjRunning = true;
      MathJax.Hub.Queue(
        ["Typeset", MathJax.Hub, this.buffer],
        ["previewDone", this]
      );
    }
  }

  previewDone() {
    this.mjRunning = this.mjPending = false;
    this.swapBuffers();
  }

}
