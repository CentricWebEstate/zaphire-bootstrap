// First things first, we need to get a reference to Zaphire
Zaphire = require ( 'zaphire-framework' );

/**
 * Here we'll tell Zaphire we're we've put our own bootstrap
 * file which will add any middleware in that we need.
 *
 * We also need to give it the location of our loadbalancer
 * configuration.
 *
 * And then finally we also need to let it know the project root.
 */

Zaphire.bootstrap = 'bootstrap$js';
Zaphire.config 		= 'configs.loadbalancer$jn';
Zaphire.root			= __dirname;

/**
 * There are two ways you can use Zaphire:
 * 1. You can let Zaphire handle all server operations; or:
 * 2. You can get Zaphire to give you a reference to the Zaphire App
 *
 * In this case we'll assume you're wanting to start a server yourself
 * but if this isn't how you'd like to go, you can get Zaphire's reference
 * by calling Zaphire.getApp()
 */

Zaphire.start ();
