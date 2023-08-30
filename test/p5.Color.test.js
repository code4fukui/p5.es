import * as t from "https://deno.land/std/testing/asserts.ts";
import Color from "../src/color/p5.Color.js";

Deno.test("simple", () => {
  const c = new Color("hsl(100,30%,20%)");
  t.assertEquals(c.toString("rgb%"), "rgb(18.0%, 26.0%, 14.0%)");
});
Deno.test("rgb", () => {
  const c = new Color("rgb(1,1,1)");
  t.assertEquals(c.toString("#rrggbb"), "#010101");
});
Deno.test("toString", () => {
  const c = new Color("rgb(255,0,0)");
  t.assertEquals(c.toString("#rrggbb"), "#ff0000");
  t.assertEquals(c.toString("#rrggbbaa"), "#ff0000ff");
  t.assertEquals(c.toString("#rgb"), "#f00");
  t.assertEquals(c.toString("#rgba"), "#f00f");
  t.assertEquals(c.toString("rgb"), "rgb(255, 0, 0)");
  t.assertEquals(c.toString("rgb%"), "rgb(100.0%, 0.0%, 0.0%)");
  t.assertEquals(c.toString("rgba%"), "rgba(100.0%, 0.0%, 0.0%, 1)");
  t.assertEquals(c.toString("hsb"), "hsb(0, 100.0%, 100.0%)");
  t.assertEquals(c.toString("hsv"), "hsb(0, 100.0%, 100.0%)");
  t.assertEquals(c.toString("hsba"), "hsba(0, 100.0%, 100.0%, 1)");
  t.assertEquals(c.toString("hsva"), "hsba(0, 100.0%, 100.0%, 1)");
  t.assertEquals(c.toString("hsl"), "hsl(0, 100.0%, 50.0%)");
  t.assertEquals(c.toString("hsla"), "hsla(0, 100.0%, 50.0%, 1)");
  t.assertEquals(c.toString("rgba"), "rgba(255,0,0,1)");
});
Deno.test("parse", () => {
  const c = "#ff0000ff";
  t.assertEquals(new Color("#ff0000").toString("#rrggbbaa"), c);
  t.assertEquals(new Color("#ff0000ff").toString("#rrggbbaa"), c);
  t.assertEquals(new Color("#f00").toString("#rrggbbaa"), c);
  t.assertEquals(new Color("#f00f").toString("#rrggbbaa"), c);
  t.assertEquals(new Color("rgb(255, 0, 0)").toString("#rrggbbaa"), c);
  t.assertEquals(new Color("rgb(100.0%, 0.0%, 0.0%)").toString("#rrggbbaa"), c);
  t.assertEquals(new Color("rgba(100.0%, 0.0%, 0.0%, 1)").toString("#rrggbbaa"), c);
  t.assertEquals(new Color("hsb(0, 100.0%, 100.0%)").toString("#rrggbbaa"), c);
  t.assertEquals(new Color("hsb(0, 100.0%, 100.0%)").toString("#rrggbbaa"), c);
  t.assertEquals(new Color("hsba(0, 100.0%, 100.0%, 1)").toString("#rrggbbaa"), c);
  t.assertEquals(new Color("hsba(0, 100.0%, 100.0%, 1)").toString("#rrggbbaa"), c);
  t.assertEquals(new Color("hsl(0, 100.0%, 50.0%)").toString("#rrggbbaa"), c);
  t.assertEquals(new Color("hsla(0, 100.0%, 50.0%, 1)").toString("#rrggbbaa"), c);
  t.assertEquals(new Color("rgba(255,0,0,1)").toString("#rrggbbaa"), c);
});
