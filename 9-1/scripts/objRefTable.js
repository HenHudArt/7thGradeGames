const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.scrollto,
		C3.Behaviors.Car,
		C3.Plugins.Text,
		C3.Behaviors.solid,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Acts.SetVisible
	];
};
self.C3_JsPropNameTable = [
	{ScrollTo: 0},
	{Car: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{Text: 0},
	{Sprite3: 0},
	{Solid: 0},
	{Sprite4: 0},
	{Text2: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{Sprite7: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Text2: class extends self.ITextInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {}
}