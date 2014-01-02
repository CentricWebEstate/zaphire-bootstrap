# We'll start off by importing the Zaphire Base Controller
Controller = Import 'class.BaseController$cs'

# Define the MainController class and make it extend our BaseController
class MainController extends Controller

	# This runs before the main action
	beforeAction: ->
		@view.set 'siteTitle', 'Zaphire Bootstrap'

	main: ->
		# Don't need to do anything here as the view is automagically rendered