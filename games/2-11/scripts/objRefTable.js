const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.solid,
		C3.Behaviors.Sin,
		C3.Plugins.Text,
		C3.Behaviors.Anchor,
		C3.Plugins.Button,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Button.Cnds.OnClicked
	];
};
self.C3_JsPropNameTable = [
	{background: 0},
	{"8Direction": 0},
	{mario: 0},
	{Solid: 0},
	{wall: 0},
	{Sine: 0},
	{pirahanaPlant: 0},
	{Trophy: 0},
	{Anchor: 0},
	{Text: 0},
	{winscreen: 0},
	{Text2: 0},
	{Text3: 0},
	{Button: 0},
	{Sprite2: 0},
	{background2: 0},
	{wall2: 0},
	{trophy2: 0},
	{winning: 0},
	{Text4: 0},
	{mariooooo: 0},
	{bowser: 0},
	{Text5: 0},
	{Lives: 0}
];

self.InstanceType = {
	background: class extends self.ITiledBackgroundInstance {},
	mario: class extends self.ISpriteInstance {},
	wall: class extends self.ISpriteInstance {},
	pirahanaPlant: class extends self.ISpriteInstance {},
	Trophy: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	winscreen: class extends self.ISpriteInstance {},
	Text2: class extends self.ITextInstance {},
	Text3: class extends self.ITextInstance {},
	Button: class extends self.IButtonInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	background2: class extends self.ISpriteInstance {},
	wall2: class extends self.ISpriteInstance {},
	trophy2: class extends self.ISpriteInstance {},
	winning: class extends self.ISpriteInstance {},
	Text4: class extends self.ITextInstance {},
	mariooooo: class extends self.ISpriteInstance {},
	bowser: class extends self.ISpriteInstance {},
	Text5: class extends self.ITextInstance {}
}