import _ from 'lodash';

export function neighbours(point) {
  return remove(squareAround(point), point);
};

export function unique(list) {
  return _.uniq(list, false, x => x+"")
}

export function includes(list, point){
  return _.any(list, (item) => _.eq(item, point));
};

function remove(list, point) {
  return _.filter(list, (item) => ! _.eq(item, point))
};

function squareAround([x, y]) {
  return product(_.range(y - 1, y + 2),
                 _.range(x - 1, x + 2));
};

function product() {
  return _.reduceRight(arguments, (a, b) => {
    return _.flatten(_.map(a, (x) => _.map(b, (y) => x.concat(y)), true))
  }, [[]])
};

