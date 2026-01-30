const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Car,
		C3.Behaviors.scrollto,
		C3.Behaviors.solid,
		C3.Plugins.TiledBg,
		C3.Plugins.Text,
		C3.Behaviors.Anchor,
		C3.Plugins.Button,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Behaviors.Car.Acts.SetMaxSpeed,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.ResetEventVar,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{Car: 0},
	{ScrollTo: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{Solid: 0},
	{Barriers: 0},
	{BigTree: 0},
	{SmallTree: 0},
	{TiledBackground: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{POWERUPS: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{Anchor: 0},
	{Fred: 0},
	{Text: 0},
	{TiledBackground2: 0},
	{Button: 0},
	{LapTime: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Barriers: class extends self.ISpriteInstance {},
	BigTree: class extends self.ISpriteInstance {},
	SmallTree: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	POWERUPS: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Fred: class extends self.ITextInstance {},
	Text: class extends self.ITextInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	Button: class extends self.IButtonInstance {}
}