ServerEvents.recipes((event) => {
  event.remove({ mod: "ad_astra" });
  event.remove({ output: "#forge:tools" });
  event.remove({ id: "create:sequenced_assembly/precision_mechanism" });
});