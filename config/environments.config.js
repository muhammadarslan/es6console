// Here is where you can define configuration overrides based on the execution environment.
// Supply a key to the default export matching the NODE_ENV that you wish to target, and
// the base configuration will apply your overrides before exporting itself.
module.exports = {
  // ======================================================
  // Overrides when NODE_ENV === 'development'
  // ======================================================
  // NOTE: In development, we use an explicit public path when the assets
  // are served webpack by to fix this issue:
  // http://stackoverflow.com/questions/34133808/webpack-ots-parsing-error-loading-fonts/34133809#34133809
  development : (config) => ({
    compiler_public_path : `http://${config.server_host}:${config.server_port}/`,
  }),

  staging: (config) => ({
    bucket_name : 'staging.es6console.com',
    api_server_host : 'https://zl9ct7ehp9.execute-api.eu-west-1.amazonaws.com/dev/',
    s3_server_host  : 'http://staging.es6console.com.s3-website-eu-west-1.amazonaws.com/',
    snippet_bucket_url: 'https://s3-eu-west-1.amazonaws.com/es6console-prod-snippets/',

    compiler_public_path     : '/',
    compiler_fail_on_warning : false,
    compiler_hash_type       : 'chunkhash',
    compiler_devtool         : 'source-map',
    compiler_stats           : {
      chunks       : true,
      chunkModules : true,
      colors       : true
    }
  }),

  // ======================================================
  // Overrides when NODE_ENV === 'production'
  // ======================================================
  production : (config) => ({
    bucket_name : 'es6console.com',
    api_server_host : 'https://api.es6console.com/v1/',
    s3_server_host  : 'https://es6console.com/',
    snippet_bucket_url: 'https://s3-eu-west-1.amazonaws.com/es6console-prod-snippets/',

    compiler_public_path     : '/',
    compiler_fail_on_warning : false,
    compiler_hash_type       : 'chunkhash',
    compiler_devtool         : 'source-map',
    compiler_stats           : {
      chunks       : true,
      chunkModules : true,
      colors       : true
    }
  })
};
