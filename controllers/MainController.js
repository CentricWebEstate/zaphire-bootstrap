/** Disclaimer: Things look so much better in coffeescript **/

// We'll start off by importing the Zaphire Base Controller
Controller = Import ( 'class.BaseController$cs' );

// Define the MainController constructor
MainController = function ()
{
	// We should never have to do anything in the contructor
	return MainController.__super__.constructor.apply ( this, arguments );
};

// Extend our controller with the base controller
__extend ( MainController, Controller);

// Do some things before our action is loaded
MainController.prototype.beforeAction = function ()
{
	this.view.set ( 'siteTitle', 'Zaphire Bootstrap' );
};

// Define our default action
MainController.prototype.main = function ()
{
	/**
	 * Don't need to do anything here as the default view
	 * will automatically be rendered
	 */
}

module.exports = MainController;