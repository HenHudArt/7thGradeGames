const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.EightDir,
		C3.Behaviors.solid,
		C3.Plugins.Text,
		C3.Behaviors.Sin,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Behaviors.EightDir.Acts.SetMaxSpeed,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Cnds.AngleWithin,
		C3.Behaviors.Platform.Acts.SetMaxFallSpeed,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Cnds.IsMirrored
	];
};
self.C3_JsPropNameTable = [
	{Platform: 0},
	{ScrollTo: 0},
	{"8Direction": 0},
	{ScrollTo2: 0},
	{Cessna170: 0},
	{Solid: 0},
	{Tarmac: 0},
	{Ocean: 0},
	{DieSonne: 0},
	{clouds: 0},
	{Grass: 0},
	{WillkommenInDeutschland: 0},
	{WelcomeToLutonSign: 0},
	{ControlTowerL: 0},
	{ControlTowerP: 0},
	{Sine: 0},
	{CloudA: 0},
	{CloudB: 0},
	{CloudC: 0},
	{CloudD: 0},
	{MountainA: 0},
	{MountainB: 0},
	{Sprite: 0}
];

self.InstanceType = {
	Cessna170: class extends self.ISpriteInstance {},
	Tarmac: class extends self.ISpriteInstance {},
	Ocean: class extends self.ISpriteInstance {},
	DieSonne: class extends self.ISpriteInstance {},
	clouds: class extends self.ISpriteInstance {},
	Grass: class extends self.ISpriteInstance {},
	WillkommenInDeutschland: class extends self.ITextInstance {},
	WelcomeToLutonSign: class extends self.ITextInstance {},
	ControlTowerL: class extends self.ISpriteInstance {},
	ControlTowerP: class extends self.ISpriteInstance {},
	CloudA: class extends self.ISpriteInstance {},
	CloudB: class extends self.ISpriteInstance {},
	CloudC: class extends self.ISpriteInstance {},
	CloudD: class extends self.ISpriteInstance {},
	MountainA: class extends self.ISpriteInstance {},
	MountainB: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {}
}