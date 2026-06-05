const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Keyboard,
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.TileMovement,
		C3.Behaviors.Bullet,
		C3.Behaviors.Tween,
		C3.Plugins.Text,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.System.Exps.min,
		C3.Plugins.Sprite.Exps.Opacity,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Text.Acts.SetVisible
	];
};
self.C3_JsPropNameTable = [
	{Keyboard: 0},
	{Background: 0},
	{Solid: 0},
	{Wall: 0},
	{TileMovement: 0},
	{Player: 0},
	{Bullet: 0},
	{StormCloud: 0},
	{Rain: 0},
	{Tween: 0},
	{FadeOverlay: 0},
	{WinScreen: 0},
	{Lives: 0},
	{Text: 0},
	{RainAmount: 0},
	{LIVES: 0}
];

self.InstanceType = {
	Keyboard: class extends self.IInstance {},
	Background: class extends self.ITiledBackgroundInstance {},
	Wall: class extends self.ISpriteInstance {},
	Player: class extends self.ISpriteInstance {},
	StormCloud: class extends self.ISpriteInstance {},
	Rain: class extends self.ISpriteInstance {},
	FadeOverlay: class extends self.ISpriteInstance {},
	WinScreen: class extends self.ISpriteInstance {},
	Lives: class extends self.ITextInstance {},
	Text: class extends self.ITextInstance {}
}