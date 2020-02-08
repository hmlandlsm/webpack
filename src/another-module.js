// You can limit the size of your bundles by using import() or require.ensure
//  to lazy load some parts of your application.on.
import _ from 'lodash';

console.log(
  _.join(['Another', 'module', 'loaded!'], ' ')
);