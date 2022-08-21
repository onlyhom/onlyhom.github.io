// Generated by dts-bundle-generator v6.12.0

export interface CallbackFn {
	(curValue?: number[] | string[], indexArr?: number[], context?: any): void;
}
export interface OldCallbackFn {
	(indexArr?: number[], curValue?: number[] | string[], context?: any): void;
}
export type KeyMap = {
	id: string;
	value: string;
	childs: string;
};
export type CascadeData = {
	[k: string]: any;
};
export type OptionData = CascadeData | string | number;
export type CustomConfig = {
	trigger: string | HTMLElement;
	wheels: CascadeData[];
	/** 兼容旧版本 */
	callback?: OldCallbackFn;
	cancel?: OldCallbackFn;
	transitionEnd?: OldCallbackFn;
	triggerDisplayData?: boolean;
	/** 新版本 */
	onChange?: CallbackFn;
	onCancel?: CallbackFn;
	onTransitionEnd?: CallbackFn;
	/** *********** */
	onShow?: CallbackFn;
	onHide?: CallbackFn;
	initValue?: string;
	position?: number[];
	colWidth?: number[];
	/** 组件标题 */
	title?: string;
	/** 拼接值的连接符 */
	connector?: string;
	ensureBtnText?: string;
	cancelBtnText?: string;
	ensureBtnColor?: string;
	cancelBtnColor?: string;
	titleColor?: string;
	titleBgColor?: string;
	textColor?: string;
	bgColor?: string;
	maskOpacity?: number;
	keyMap?: KeyMap;
	triggerDisplayValue?: boolean;
	autoFocus?: boolean;
	scrollSpeed?: number;
};
export type MobileSelectConfig = CustomConfig & Required<Pick<CustomConfig, "keyMap" | "position" | "colWidth" | "title" | "connector" | "ensureBtnText" | "cancelBtnText" | "triggerDisplayValue" | "scrollSpeed">>;
declare class MobileSelect {
	mobileSelect: any;
	trigger: HTMLElement;
	wheel: HTMLCollectionOf<HTMLElement>;
	slider: HTMLCollectionOf<HTMLElement>;
	wheels: HTMLDivElement;
	panel: HTMLDivElement;
	ensureBtn: HTMLDivElement;
	cancelBtn: HTMLDivElement;
	grayLayer: HTMLDivElement;
	popUp: HTMLDivElement;
	initPosition: number[];
	initColWidth: number[];
	/** 拼接值的连接符 */
	connector: string;
	/** 数据源 */
	wheelsData: CascadeData[];
	/** 显示json */
	displayJson: CascadeData[];
	/** 当前数值 */
	curValue: string[] | number[];
	/** 当前索引位置 */
	curIndexArr: number[];
	/** 是否级联 */
	isCascade: boolean;
	/** 是否JSON格式 */
	isJsonType: boolean;
	/** 开始 Y轴位置 */
	startY: number;
	/** 结束 Y轴位置 */
	moveEndY: number;
	/** 当前 Y轴位置 */
	moveY: number;
	/** 上一次 Y轴位置 */
	preMoveY: number;
	/** Y轴新旧位移差值 */
	offsetY: number;
	/** 差值总和? */
	offsetSum: number;
	/** 最大Border? */
	oversizeBorder: number;
	/** 是否启用点击状态 */
	enableClickStatus: boolean;
	/** 是否是PC端 */
	isPC: boolean;
	/** 选项高度(li元素的高度) */
	optionHeight: number;
	/** 存放滚动距离的数组 */
	curDistance: number[];
	/** 级联数据 相当于wheels[0].data的别名 */
	cascadeJsonData: CascadeData[];
	/** 用户自定义key */
	keyMap: KeyMap;
	eventHandleMap: {
		[x: string]: {
			event: string | string[];
			fn: Function;
		};
	};
	initDeepCount: number;
	config: MobileSelectConfig;
	static defaultConfig: {
		keyMap: {
			id: string;
			value: string;
			childs: string;
		};
		position: never[];
		colWidth: never[];
		title: string;
		connector: string;
		ensureBtnText: string;
		cancelBtnText: string;
		triggerDisplayValue: boolean;
		scrollSpeed: number;
	};
	constructor(config: CustomConfig);
	init(): void;
	static checkIsPC(): boolean;
	static checkDataType(wheelsData: CascadeData): boolean;
	static REQUIRED_PARAMS: (keyof CustomConfig)[];
	static checkRequiredConfig(config: CustomConfig): boolean;
	static log(type: "error" | "info", tips: string): void;
	checkTriggerAvailable(): boolean;
	/** 根据initValue 获取initPostion 需要区分级联和非级联情况 注意此时displayJson还没生成 */
	getPositionByValue(): number[];
	setTitle(title: string): void;
	setStyle(config: MobileSelectConfig): void;
	show(): void;
	hide(): void;
	registerEvents(type: "add" | "remove"): void;
	destroy(): void;
	getOptionsHtmlStr(childs: CascadeData): string;
	renderComponent(wheelsData: CascadeData[]): void;
	reRenderWheels(): void;
	checkCascade(): boolean;
	initCascade(): void;
	initCheckArrDeep(parent: CascadeData): void;
	checkArrDeep(parent: CascadeData): void;
	checkRange(index: number, posIndexArr: number[]): void;
	resetPosition(index: number, posIndexArr: number[]): number[];
	updateWheels(data: CascadeData[]): void;
	updateWheel(sliderIndex: number, data: Omit<OptionData, "CascadeData">[]): void;
	fixRowStyle(): void;
	getIndex(distance: number): number;
	getIndexArr(): number[];
	getCurValue(): string[] | number[];
	getValue(): string[] | number[];
	calcDistance(index: number): number;
	setCurDistance(indexArr: number[]): void;
	fixPosition(distance: number): number;
	movePosition(theSlider: HTMLElement, distance: number): void;
	locatePosition(index: number, posIndex: number): void;
	updateCurDistance(theSlider: HTMLElement, index: number): void;
	getInnerText(sliderIndex: number): string;
	touch(event: TouchEvent | MouseEvent): void;
}

export {
	MobileSelect as default,
};

export {};
