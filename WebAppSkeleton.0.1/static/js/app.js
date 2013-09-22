var APP = APP || {};

(function () {
	// Data objecten
	APP.schedule = schedule{
		title: 'Schedule'
		tab1: [
			{
				tableDate: 'Monday 18 March',
				tableTeam1: 'Team',
				tableResult: 'Result',
				tableTeam2: 'Team'
			}, {
				date: 'Monday, 9:00am',
				team1: 'Chasing',
				result: '13 - 9',
				team2: 'Amsterdam Money Gang'
			}, 
		]
	};

	APP.game = {
		title:'Pagina 2',
		description:'Pagina 2 is de tweede pagina'
	};

	APP.ranking = {
		title:'Pagina 3',
		description:'Pagina 3 is de derde pagina'
	};
	
	// Controller Init
	APP.controller = {
		init: function () {
			// Initialize router
			APP.router.init();
		}
	};

	// Router
	APP.router = {
		init: function () {
	  		routie({
			    '/schedule': function() {
			    	APP.page.schedule();
				},
			    '/game': function() {
			    	APP.page.game();
			    },

			    '/ranking': function() {
			    	APP.page.ranking();
			    },
			    '*': function() {
			    	APP.page.schedule();
			    }
			});
		},

		change: function () {
            var route = window.location.hash.slice(2),
                sections = qwery('section[data-route]'),
                section = qwery('[data-route=' + route + ']')[0];  

            // Show active section, hide all other
            if (section) {
            	for (var i=0; i < sections.length; i++){
            		sections[i].classList.remove('active');
            	}
            	section.classList.add('active');
            }

            // Default route
            if (!route) {
            	sections[0].classList.add('active');
            }

		}
	};

	// Pages
	APP.page = {
		schedule: function () {
			Transparency.render(qwery('[data-route=schedule')[0], APP.schedule);
			APP.router.change();
		},

		game: function () {
			Transparency.render(qwery('[data-route=game')[0], APP.game);
			APP.router.change();
		},

		ranking: function () {
			Transparency.render(qwery('[data-route=ranking')[0], APP.ranking);
			APP.router.change();
		}
	}
	// DOM ready
	domready(function () {
		// Kickstart application
		APP.controller.init();
	});
	
})();