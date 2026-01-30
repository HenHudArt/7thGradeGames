const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Button,
		C3.Plugins.TiledBg,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.ToggleBoolVar,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{Sprite: 0},
	{button: 0},
	{talkingidol: 0},
	{breathIn: 0},
	{breathOut: 0},
	{TiledBackground: 0},
	{TiledBackground2: 0},
	{Text: 0},
	{Text2: 0},
	{textBoxBg: 0},
	{Start: 0},
	{BreathInText: 0},
	{BreathOutText: 0},
	{countdown: 0},
	{endButton: 0},
	{TiledBackground3: 0},
	{Sprite2: 0},
	{Text3: 0},
	{RestartGame: 0},
	{BreathIn: 0},
	{timer: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	button: class extends self.IButtonInstance {},
	talkingidol: class extends self.ISpriteInstance {},
	breathIn: class extends self.ISpriteInstance {},
	breathOut: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	Text: class extends self.ITextInstance {},
	Text2: class extends self.ITextInstance {},
	textBoxBg: class extends self.ISpriteInstance {},
	Start: class extends self.IButtonInstance {},
	BreathInText: class extends self.ITextInstance {},
	BreathOutText: class extends self.ITextInstance {},
	countdown: class extends self.ITextInstance {},
	endButton: class extends self.IButtonInstance {},
	TiledBackground3: class extends self.ITiledBackgroundInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Text3: class extends self.ITextInstance {},
	RestartGame: class extends self.IButtonInstance {}
}