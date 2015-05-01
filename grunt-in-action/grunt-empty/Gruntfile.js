'use strict';


module.exports = function (grunt) {
	
	require('load-grunt-tasks')(grunt);

	require('time-grunt')(grunt);
	

	var config = {
		app: 'app',
		dist: 'dist'
	}

	grunt.initConfig({
		config:config,

		copy:{
			dist_html:{
				// files:{
				// 	'<%= config.dist %>/index.html':'<%=config.app %>/index.html',
				// 	'<%= config.dist %>/js/index.js':'<%=config.app %>/js/index.js'
				// }
				// files:[
				// 	{
				// 		src:'<%= config.app %>/index.html',
				// 		dest:'<%= config.dist %>/index.html'
				// 	},
				// 	{
				// 		src:'<%= config.app %>/js/index.js',
				// 		dest:'<%= config.dist %>/js/index.js'
				// 	}
				// ]
				files:[
					{
						expand:true,
						cwd:'<%= config.app %>/',
						src:'*.html',
						dest:'<%= config.dist %>/',
						ext:'.min.html',
						extDot:'first',//last
						flatten: false,//展开平铺 true
						rename:function (dest, src) {
							return dest + 'js/' + src;
						}
					},
				]
			},
			
			// dist_html:{
			// 	src:'<%= config.app %>/index.html',
			// 	dest: '<%= config.dist %>/index.html'
			// },
			// dist_js:{
			// 	src:'<%= config.app %>/index.js',
			// 	dest: '<%= config.dist %>/index.js'
			// }
		},


		clean:{
			dist:{
				// src:['<%= config.dist %>/index.html','<%= config.dist %>/js/index.js']
				src:['<%= config.dist %>/**/*'],
				filter:function(filepath){
					return(!grunt.file.isDir(filepath));
				},

			}
		}
	});
}