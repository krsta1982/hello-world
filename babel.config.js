const presets = [
    [
      "@babel/env",
      {
        targets: {
          edge: "*",
          firefox: "*",
          chrome: "*",
          safari: "*",
        },
        useBuiltIns: "usage",
      },
    ],
  ]
  
  module.exports = { presets }