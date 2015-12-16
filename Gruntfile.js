module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //先压缩后合并
		uglify:{
	          options:{	// 配置uglify的参数
	               mangle: { except: ['Zepto'] },	// 防止混淆变量名时对jQuery产生影响
	               banner: '/* Powered by https://github.com/dszls */\n'
	          },
	          minify:{	// 配置uglify的执行目标
	            files:{
	          		'src/jquery.dsselect.min.js': ['src/jquery.dsselect.js']
	        		}
	          }
	    },
		watch: {
	   	 	css: {
	        	files: ['src/jquery.dsselect.js'],
	        	tasks: ['cache']
	    	}
		}
  });


  // 加载包含 "jshint,concat,uglify" 任务的插件。
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');


  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify']);

  // grunt.registerTask('homepage', ['transport:homepage', 'concat:homepage', 'uglify:homepage', 'clean'])

};