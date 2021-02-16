const afterLoading = () => {
  console.log('loaded');
  navigator.getInstalledRelatedApps().then((relatedApps) => {
    console.log('hree');
    for (let app of relatedApps) {
      console.log(app.platform);
      console.log(app.url);
      console.log(app.id);
      if (app.id === 'com.novelty.medicaid') {
        window.location = 'medicaid://';
      }
    }
  });
  ('use strict');

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js');
  }
};

window.onload = afterLoading();
