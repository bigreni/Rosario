    function onLoad() {
        if ((/(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent))) {
            document.addEventListener('deviceready', checkFirstUse, false);
        } else {
            checkFirstUse();
        }
    }

    var admobid = {};
    if (/(android)/i.test(navigator.userAgent)) {
        admobid = { // for Android
            banner: 'ca-app-pub-1683858134373419/8619965489',
            interstitial:'ca-app-pub-9249695405712287/8883612750'
            //banner: 'ca-app-pub-3886850395157773/3411786244'
            //interstitial: 'ca-app-pub-9249695405712287/3301233156'
        };
    } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) { // for ios
    admobid = {
      banner: 'ca-app-pub-1683858134373419/8619965489', 
      interstitial: 'ca-app-pub-9249695405712287/7179328353'
    };
  }

    function initApp() {
        if (!AdMob) { alert('admob plugin not ready'); return; }
        initAd();
        loadInterstitial();
    }

    function initAd() {
        var defaultOptions = {
            // bannerId: admobid.banner,
            // interstitialId: admobid.interstitial,
            // adSize: 'SMART_BANNER',
            // width: integer, // valid when set adSize 'CUSTOM'
            // height: integer, // valid when set adSize 'CUSTOM'
            position: AdMob.AD_POSITION.BOTTOM_CENTER,
            // offsetTopBar: false, // avoid overlapped by status bar, for iOS7+
            bgColor: 'black', // color name, or '#RRGGBB'
            // x: integer,      // valid when set position to 0 / POS_XY
            // y: integer,      // valid when set position to 0 / POS_XY
            isTesting: false // set to true, to receiving test ad for testing purpose
            // autoShow: true // auto show interstitial ad when loaded, set to false if prepare/show
        };
        AdMob.setOptions(defaultOptions);
        registerAdEvents();
    }
    // optional, in case respond to events or handle error
    function registerAdEvents() {
        // new events, with variable to differentiate: adNetwork, adType, adEvent
        document.addEventListener('onAdFailLoad', function (data) {
            document.getElementById('screen').style.display = 'none';     
        });
        document.addEventListener('onAdLoaded', function (data) { });
        document.addEventListener('onAdPresent', function (data) { });
        document.addEventListener('onAdLeaveApp', function (data) { });
        document.addEventListener('onAdDismiss', function (data) {
            document.getElementById('screen').style.display = 'none';     
		});
    }

   function createSelectedBanner() {
       AdMob.createBanner({adId:admobid.banner});
    }

	function loadInterstitial() {
        AdMob.prepareInterstitial({ adId: admobid.interstitial, isTesting: false, autoShow: true });
    }

   function checkFirstUse()
    {
        window.ga.startTrackerWithId('UA-88579601-4', 1, function(msg) {
            window.ga.trackView('Home');
        });

            initApp();
            askRating();
            //document.getElementById('screen').style.display = 'none';     
    }

function askRating()
{
  AppRate.preferences = {
  openStoreInApp: true,
  useLanguage:  'es',
  usesUntilPrompt: 10,
  promptAgainForEachNewVersion: false,
  storeAppURL: {
                ios: '1232892448',
                android: 'market://details?id=com.buenosaires.withads'
               }
};
 
AppRate.promptForRating(false);
}   