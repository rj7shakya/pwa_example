const afterLoading = () => {
  ('use strict');
  console.log(navigator.getInstalledRelatedApps);
  let linkObject = document.getElementById('link');

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js');
    navigator.getInstalledRelatedApps().then((relatedApps) => {
      console.log('apps', relatedApps);
      for (let app of relatedApps) {
        console.log(app.platform);
        console.log(app.url);
        console.log(app.id);
        if (app.id === 'com.novelty.medicaid') {
          window.location.href = 'medicaid://host';
          linkObject.innerHTML = 'GO TO THE APP';
        }
      }
      if (linkObject.innerHTML == '') {
        linkObject.innerHTML = 'DOWNLOAD APP';
      }
    });
  }
};

window.onload = afterLoading();
