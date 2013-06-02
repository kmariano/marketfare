/**
 * Created with IntelliJ IDEA.
 * User: koshin
 * Date: 6/1/13
 * Time: 7:27 PM
 * To change this template use File | Settings | File Templates.
 */


marketfare.models.Market = Backbone.Model.extend({

});

marketfare.Product = Backbone.Model.extend({});


marketfare.models.ProductList = Backbone.Collection.extend({

    model: marketfare.models.Product

});


marketfare.models.MarketList = Backbone.Collection.extend({
    model: marketfare.models.Market
});
