['npm i -S cerebral@next',
 'npm uninstall -S cerebral-model-immutable',
 'npm i -S cerebral-model-immutable',
 'npm i -S cerebral-module-devtools@next',
 'npm uninstall -S cerebral-module-http',
 'npm i -S cerebral-module-http',
 'npm i -S cerebral-module-recorder@next',
 'npm uninstall -S cerebral-module-router',
 'npm i -S cerebral-module-router',
 'npm uninstall -S cerebral-provider-modules',
 'npm i -S cerebral-provider-modules',
 'npm uninstall -S cerebral-provider-modules',
 'npm i -S cerebral-provider-modules',
 'npm i -S cerebral-view-react@next'
].each do |cmd|
  puts cmd
  `#{cmd}`
end
