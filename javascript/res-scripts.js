function generatePDF() {
    // Choose the element that our invoice is rendered in.
    const jpg_image = document.getElementById("r-image").src;
    toDataURL(jpg_image,
    function (dataUrl) {
      console.log('RESULT:', dataUrl)
    }
  );

    const element = document.getElementById('resume-cont');
    const opt = {
      margin:       [0, -1.5],
      filename:     'resume.pdf',
      // pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
      image:        { type: 'jpeg', quality: 1 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    // Choose the element and save the PDF for our user.
    html2pdf().set(opt).from(element).save();
  }

  function toDataURL(src, callback, outputFormat) {
    let image = new Image();
    image.crossOrigin = 'Anonymous';
    image.onload = function () {
      let canvas = document.createElement('canvas');
      let ctx = canvas.getContext('2d');
      let dataURL;
      canvas.height = this.naturalHeight;
      canvas.width = this.naturalWidth;
      ctx.drawImage(this, 0, 0);
      dataURL = canvas.toDataURL(outputFormat);
      callback(dataURL);
    };
    image.src = src;
    if (image.complete || image.complete === undefined) {
      image.src = "data:image/gif;base64, R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      image.src = src;
    }
  }
 
