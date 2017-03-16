head.load(
    { file: 'vendor/jquery.js' },
    { file: 'vendor/angular.js' },
    { file: 'vendor/angular-messages.js' },
    { file: 'vendor/angular-ui-router.min.js' },
    { file: 'vendor/angular-animate.js' },
    { file: 'vendor/angular-touch.js' },
    { file: 'vendor/angular-cookies.js' },
    { file: 'vendor/angular-sanitize.min.js' },

    { file: 'src/testApp/common/Common.js' },
    { file: 'src/testApp/common/config/RouteConfig.js' },
    { file: 'src/testApp/common/services/ContextOptionsService.js' },
    { file: 'src/testApp/common/services/BackendSrv.js' },

    { file: 'src/testApp/main/Main.js' },
    { file: 'src/testApp/main/controllers/MainCtrl.js' },
    { file: 'src/testApp/main/directives/ReposDirective.js' },
    { file: 'src/testApp/main/directives/FavoriteReposDirective.js' },

    { file: 'src/testApp/contributor/Contributor.js' },
    { file: 'src/testApp/contributor/controllers/ContributorCtrl.js' },

    { file: 'src/testApp/TestApp.js' }
);