import assert from "assert";
import GameLogic from "../src/game_logic.es6";
import patterns from "../src/patterns.es6";

describe('GameLogic', () => {
  describe('#next -> flicker', () => {
    it('should return next state', () => {
      var first = new GameLogic(patterns.flicker.horizontal);
      assert.deepEqual(first.next(), patterns.flicker.vertical);

      var second = new GameLogic(patterns.flicker.vertical);
      assert.deepEqual(second.next(), patterns.flicker.horizontal);
    });
  });

  describe('#next -> square', () => {
    it('should return next state', () => {
      var first = new GameLogic(patterns.square);
      assert.deepEqual(first.next(), patterns.square);
    });
  });
});
