import assert from "assert";
import {neighbours, includes} from "../src/utils.es6";

describe('cell', () => {
  describe('#neighbours', () => {
    it('should return neighbour points', () =>{
      var expectedNeighbours = [[2,2],[2,3],[2,4],[3,2],[3,4],[4,2],[4,3],[4,4]];
      assert.deepEqual(expectedNeighbours, neighbours([3, 3]));

      var expectedNeighbours = [[-1,0],[-1,1],[-1,2],[0,0],[0,2],[1,0],[1,1],[1,2]];
      assert.deepEqual(expectedNeighbours, neighbours([0, 1]));
    });
  });

  describe('#includes', () => {
    it('should return true', () =>{
      assert.ok(includes([[1, 2]], [1, 2]));
    });

    it('should return false', () =>{
      assert.ok(! includes([[1, 2]], [2, 2]));
    });
  })

})

