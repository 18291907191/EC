angular.module("com.ec.router",["ngRoute"])
    .config(["$routeProvider",function ($routeProvider) {
        $routeProvider
        // 系统首页
            .when("/index",{templateUrl:"modules/systemindex/system-index.html",controller:"systemIndexController"})
        // 会员管理
            // 会员列表
            .when("/member-list",{templateUrl:"modules/membermanage/member-list.html",controller:"memberListController"})
            // 等级管理
            .when("/level-manage",{templateUrl:"modules/membermanage/level-manage.html",controller:"levelManageController"})
            // 会员记录管理
            .when("/member-record-manage",{templateUrl:"modules/membermanage/member-record-manage.html",controller:"memberRecordManageController"})
        //管理员管理
        //     权限管理
            .when("/root-manage",{templateUrl:"modules/adminmanage/root-manage.html",controller:"rootManageController"})
            // 管理员列表
            .when("/admin-list",{templateUrl:"modules/adminmanage/admin-list.html",controller:"adminListController"})
            // 个人信息
            .when("/personal-info",{templateUrl:"modules/adminmanage/personal-info.html",controller:"personalInfoController"})
            .when("/productstype",{templateUrl:"modules/productsmanagement/products-type.html", controller:"productstypeController"})
            .when("/addproducts",{templateUrl:"modules/productsmanagement/add-products.html", controller:"addproductsController"})
            .when("/brandmanagement",{templateUrl:"modules/productsmanagement/brand-management.html",controller:"brandManageController"})
            .when("/addbrand",{templateUrl:"modules/productsmanagement/add-brand.html", controller:"addbrandController"})
            .when("/productsmanagement",{templateUrl:"modules/productsmanagement/products-management.html", controller:"productsmanageController"})
            .when("/advertisement",{templateUrl:"modules/picturemanagement/advertisement.html",controller:"advertisementController"})
            .when("/picclassify",{templateUrl:"modules/picturemanagement/pic-classify.html",controller:"picclassifyController"})
            .when("/shoptabulation",{templateUrl:"modules/shopmanagement/shop-tabulation.html",controller:"tabulationController"})

            // 佳慧
            .when("/tradeMoney",{templateUrl:"modules/trademanage/trade-money.html", controller:"tradeMoneyController"})
            //交易信息
            .when("/tradeMessage",{templateUrl:"modules/trademanage/trade-message.html", controller:"tradeMessageController"})
            //订单管理
            .when("/orderManagement",{templateUrl:"modules/trademanage/order-management.html", controller:"orderManagementController"})
            //订单处理
            .when("/orderProcessing",{templateUrl:"modules/trademanage/order-processing.html", controller:"orderProcessingController"})
            //退款管理
            .when("/refundManagement",{templateUrl:"modules/trademanage/refund-management.html", controller:"refundManagementController"})
            //交易订单
            .when("/dealOrder",{templateUrl:"modules/trademanage/deal-order.html", controller:"dealOrderController"})
            //账户管理
            .when("/accountManagement",{templateUrl:"modules/paymentmanagement/account-management.html", controller:"accountManagementController"})
            //支付方式
            .when("/paymentMethod",{templateUrl:"modules/paymentmanagement/payment-method.html", controller:"paymentMethodController"})
                // 徐
            .when("/messagelist",{templateUrl:"modules/messagemanagement/message-list.html",controller:"messagelistcontroller"})
            .when("/advicefeedback",{templateUrl:"modules/messagemanagement/advice-feedback.html",controller:"advicefeedbackcontroller"})
            .when("/articlelist",{templateUrl:"modules/articlemanagement/article-list.html",controller:"articlelistcontroller"})
            .when("/classifymanagement",{templateUrl:"modules/articlemanagement/classify-management.html",controller:"classifymanagementcontroller"})
            .when("/systemsettings",{templateUrl:"modules/systemmanagement/system-settings.html",controller:"systemsettingscontroller"})
            .when("/systemcolumnmanagement",{templateUrl:"modules/systemmanagement/system-column-management.html",controller:"systemcolumnmanagementcontroller"})
            .when("/systemlog",{templateUrl:"modules/systemmanagement/system-log.html",controller:"systemlogcontroller"})
            // 默认访问系统首页
            .otherwise("/index")
    }]);
