import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { a as Canvas, c as require_jsx_runtime, i as useTexture, n as ContactShadows, o as useFrame, r as Environment, t as Lightformer } from "../_libs/@react-three/drei+[...].mjs";
import { a as ShoppingBag, c as MessageCircle, d as Instagram, f as ArrowUpRight, i as Sparkles, l as Menu, m as ArrowDown, n as X, o as ShieldCheck, p as ArrowRight, r as WheatOff, s as MessageSquare, t as Youtube, u as Leaf } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
import { D as SRGBColorSpace, P as Vector3, o as ClampToEdgeWrapping } from "../_libs/monogrid__gainmap-js+three.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DrJzSq6e.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var content = {
	brand: {
		name: "Ha Bite",
		volume: "VOLUME 01 – MAKHANA",
		line: "SMALL BITES & BIG GOODNESS",
		tagline: "Small Bites. Big Goodness."
	},
	product: {
		name: "Roasted Makhana",
		flavour: "Tikka + Moringa Fusion",
		weight: "50 g",
		origin: "Crunchy roasted makhana, also known as fox nut, made for light everyday snacking.",
		moringa: "A flavourful blend of roasted makhana, spices and moringa powder.",
		nutrition: [
			["Energy", "420 kcal"],
			["Protein", "12.5 g"],
			["Carbohydrate", "60.2 g"],
			["Dietary Fibre", "8.3 g"],
			["Total Fat", "14.3 g"],
			["Sodium", "220 mg"]
		],
		benefits: [
			["leaf", "Rich in Moringa Nutrients"],
			["spark", "High Protein"],
			["shield", "No Preservatives"],
			["grain", "Gluten Free"]
		],
		otherFlavours: ["More flavours coming soon"]
	},
	story: "Discover a fresh take on everyday snacking with Ha Bite. Explore flavourful makhana and exciting snack experiences made for your everyday moments.",
	placeholders: {
		whatsappNumber: "0000000000",
		fssai: "[FSSAI No. – to be added]",
		reviews: "Customer stories are coming soon.",
		commerce: "Online ordering is coming soon."
	},
	navigation: [
		"Home",
		"Shop",
		"About Us",
		"Partner with Ha Bite",
		"Contact"
	]
};
var logo_webp_asset_default = {
	version: 1,
	asset_id: "6f294f92-f2b2-41fc-b6fa-417a7e6b3495",
	project_id: "535c303b-ef73-4214-b447-4ab5c2a23dd9",
	url: "/__l5e/assets-v1/6f294f92-f2b2-41fc-b6fa-417a7e6b3495/logo.webp",
	r2_key: "a/v1/535c303b-ef73-4214-b447-4ab5c2a23dd9/6f294f92-f2b2-41fc-b6fa-417a7e6b3495/logo.webp",
	original_filename: "logo.webp",
	size: 59304,
	content_type: "image/webp",
	created_at: "2026-10-04T14:09:54Z"
};
function Logo({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		className,
		src: logo_webp_asset_default.url,
		alt: "Ha Bite",
		width: 848,
		height: 813
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		id: "contact",
		className: "footer",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "footer-main",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "footer-logo" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "footer-statement",
					children: [
						"MAKE EVERY",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"BITE COUNT."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Footer navigation",
					children: content.navigation.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${item.toLowerCase().replaceAll(" ", "-")}`,
						children: item
					}, item))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "footer-meta",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: content.placeholders.fssai }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 HA BITE" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#instagram",
					"aria-label": "Instagram",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#youtube",
					"aria-label": "YouTube",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, {})
				})] })
			]
		})]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function MenuOverlay({ open, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `menu-overlay ${open ? "is-open" : ""}`,
		"aria-hidden": !open,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "menu-top",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "menu-logo" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					"aria-label": "Close menu",
					onClick: onClose,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "Main navigation",
				children: content.navigation.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `#${item.toLowerCase().replaceAll(" ", "-")}`,
					onClick: onClose,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["0", index + 1] }), item]
				}, item))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: content.brand.tagline })
		]
	});
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "brand-marquee",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "brand-marquee-track",
				children: Array.from({ length: 2 }).map((_, copy) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "brand-marquee-seq",
					children: Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [content.brand.name, " ©"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "ह" }),
						content.brand.tagline,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "ह" }),
						content.brand.line,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "ह" })
					] }, i))
				}, copy))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "site-header",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#home",
					className: "site-mark",
					children: "HA BITE ©"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: content.brand.volume }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: content.brand.line }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					"aria-label": "Open menu",
					onClick: () => setOpen(true),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuOverlay, {
			open,
			onClose: () => setOpen(false)
		})
	] });
}
function WhatsAppButton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		className: "whatsapp",
		href: `https://wa.me/${content.placeholders.whatsappNumber}`,
		"aria-label": "Chat with Ha Bite on WhatsApp",
		target: "_blank",
		rel: "noreferrer",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {})
	});
}
function BrandIntro() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "brand-intro",
		"aria-label": content.brand.name,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "brand-intro-mark",
				children: "ह"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "brand-intro-name",
				children: ["HA BITE", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "brand-intro-copyright",
					children: "©"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "brand-intro-tagline",
				children: content.brand.tagline
			})
		]
	});
}
function useReducedMotion() {
	const [reduced, setReduced] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const query = window.matchMedia("(prefers-reduced-motion: reduce)");
		const update = () => setReduced(query.matches);
		update();
		query.addEventListener("change", update);
		return () => query.removeEventListener("change", update);
	}, []);
	return reduced;
}
var STORY_PROGRESS_EVENT = "ha-bite-story-progress";
function useScrollStory(rootRef, reducedMotion) {
	(0, import_react.useEffect)(() => {
		const root = rootRef.current;
		if (!root || reducedMotion) return;
		gsapWithCSS.registerPlugin(ScrollTrigger);
		const lenis = new Lenis({
			duration: 1.05,
			smoothWheel: true,
			wheelMultiplier: .9
		});
		let rafId = 0;
		const raf = (time) => {
			lenis.raf(time);
			rafId = requestAnimationFrame(raf);
		};
		rafId = requestAnimationFrame(raf);
		lenis.on("scroll", ScrollTrigger.update);
		const trigger = ScrollTrigger.create({
			trigger: root,
			start: "top top",
			end: "bottom bottom",
			scrub: .35,
			onUpdate: ({ progress }) => {
				root.style.setProperty("--story-progress", String(progress));
				window.dispatchEvent(new CustomEvent(STORY_PROGRESS_EVENT, { detail: progress }));
			}
		});
		return () => {
			trigger.kill();
			lenis.destroy();
			cancelAnimationFrame(rafId);
		};
	}, [reducedMotion, rootRef]);
}
var label_front_webp_asset_default = {
	version: 1,
	asset_id: "21900050-7ad1-4165-b35d-38aec223f778",
	project_id: "535c303b-ef73-4214-b447-4ab5c2a23dd9",
	url: "/__l5e/assets-v1/21900050-7ad1-4165-b35d-38aec223f778/label-front.webp",
	r2_key: "a/v1/535c303b-ef73-4214-b447-4ab5c2a23dd9/21900050-7ad1-4165-b35d-38aec223f778/label-front.webp",
	original_filename: "label-front.webp",
	size: 66406,
	content_type: "image/webp",
	created_at: "2026-10-04T14:10:00Z"
};
var label_back_webp_asset_default = {
	version: 1,
	asset_id: "0eeadbb9-4667-40e5-824d-40ce64bbd97c",
	project_id: "535c303b-ef73-4214-b447-4ab5c2a23dd9",
	url: "/__l5e/assets-v1/0eeadbb9-4667-40e5-824d-40ce64bbd97c/label-back.webp",
	r2_key: "a/v1/535c303b-ef73-4214-b447-4ab5c2a23dd9/0eeadbb9-4667-40e5-824d-40ce64bbd97c/label-back.webp",
	original_filename: "label-back.webp",
	size: 47412,
	content_type: "image/webp",
	created_at: "2026-10-04T14:10:03Z"
};
var productTextures = {
	front: label_front_webp_asset_default.url.startsWith("/__l5e/") ? void 0 : label_front_webp_asset_default.url,
	back: label_back_webp_asset_default.url.startsWith("/__l5e/") ? void 0 : label_back_webp_asset_default.url
};
function SnackTube({ reducedMotion }) {
	if (productTextures.front && productTextures.back) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TexturedSnackTube, { reducedMotion });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FallbackSnackTube, { reducedMotion });
}
function TexturedSnackTube({ reducedMotion }) {
	const group = (0, import_react.useRef)(null);
	const progress = (0, import_react.useRef)(0);
	const textures = useTexture([productTextures.front, productTextures.back]);
	const front = textures[0];
	const back = textures[1];
	if (!front || !back) return null;
	(0, import_react.useMemo)(() => {
		[front, back].forEach((texture) => {
			texture.colorSpace = SRGBColorSpace;
			texture.wrapS = texture.wrapT = ClampToEdgeWrapping;
			texture.anisotropy = 4;
		});
	}, [front, back]);
	(0, import_react.useEffect)(() => {
		const update = (event) => {
			progress.current = event.detail;
		};
		window.addEventListener(STORY_PROGRESS_EVENT, update);
		return () => window.removeEventListener(STORY_PROGRESS_EVENT, update);
	}, []);
	useFrame((_, rawDelta) => {
		const node = group.current;
		if (!node || reducedMotion) return;
		const dt = Math.min(rawDelta, .05);
		const p = progress.current;
		const targetRotation = p < .5 ? p * Math.PI * 2 : Math.PI + (p - .5) * Math.PI * 2;
		const targetScale = p < .32 ? 1 + p * 1.25 : p < .58 ? 1.4 : 1.4 - (p - .58) * .72;
		const targetY = p > .18 && p < .48 ? -.45 : 0;
		const ease = 1 - Math.exp(-8 * dt);
		node.rotation.y += (targetRotation - node.rotation.y) * ease;
		node.scale.lerp(new Vector3(targetScale, targetScale, targetScale), ease);
		node.position.y += (targetY - node.position.y) * ease;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: group,
		rotation: [
			.04,
			-.08,
			-.025
		],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					1.48,
					1.48,
					4.95,
					72,
					1,
					true,
					-Math.PI / 2,
					Math.PI
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: front,
					roughness: .68,
					metalness: .02,
					side: 2
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					1.48,
					1.48,
					4.95,
					72,
					1,
					true,
					Math.PI / 2,
					Math.PI
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: back,
					roughness: .68,
					metalness: .02,
					side: 2
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					2.53,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					1.54,
					1.54,
					.2,
					72
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#17451f",
					roughness: .28,
					metalness: .35
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					2.65,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					1.43,
					1.48,
					.06,
					72
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#285d31",
					roughness: .22,
					metalness: .35
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					-2.54,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					1.51,
					1.51,
					.12,
					72
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#b7b0a0",
					roughness: .22,
					metalness: .78
				})]
			})
		]
	});
}
function FallbackSnackTube({ reducedMotion }) {
	const group = (0, import_react.useRef)(null);
	const progress = (0, import_react.useRef)(0);
	(0, import_react.useEffect)(() => {
		const update = (event) => {
			progress.current = event.detail;
		};
		window.addEventListener(STORY_PROGRESS_EVENT, update);
		return () => window.removeEventListener(STORY_PROGRESS_EVENT, update);
	}, []);
	useFrame((_, rawDelta) => {
		const node = group.current;
		if (!node || reducedMotion) return;
		const dt = Math.min(rawDelta, .05);
		const targetRotation = progress.current * Math.PI * 2;
		const ease = 1 - Math.exp(-8 * dt);
		node.rotation.y += (targetRotation - node.rotation.y) * ease;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: group,
		rotation: [
			.04,
			-.08,
			-.025
		],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					1.48,
					1.48,
					4.95,
					72
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#d7c58c",
					roughness: .68
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					2.53,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					1.54,
					1.54,
					.2,
					72
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#17451f",
					roughness: .28,
					metalness: .35
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					-2.54,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					1.51,
					1.51,
					.12,
					72
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#b7b0a0",
					roughness: .22,
					metalness: .78
				})]
			})
		]
	});
}
function ProductScene({ reducedMotion }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .9 }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				5,
				8,
				7
			],
			intensity: 2.2,
			castShadow: true,
			"shadow-mapSize-width": 1024,
			"shadow-mapSize-height": 1024
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
			position: [
				-4,
				2,
				4
			],
			intensity: 12,
			color: "#ffe8ae"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Environment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightformer, {
			intensity: 3,
			position: [
				0,
				6,
				2
			],
			scale: [
				8,
				4,
				1
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightformer, {
			intensity: 2,
			position: [
				-5,
				1,
				1
			],
			"rotation-y": Math.PI / 2,
			scale: [
				8,
				2,
				1
			]
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SnackTube, { reducedMotion }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactShadows, {
			position: [
				0,
				-2.75,
				0
			],
			opacity: .26,
			scale: 8,
			blur: 2.8,
			far: 5,
			resolution: 512
		})
	] });
}
function ProductCanvas({ reducedMotion }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "product-canvas",
		"aria-label": "Rotating Ha Bite roasted makhana tube",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "leaf leaf-a" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "leaf leaf-b" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "brand-loader",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ह" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "LOADING" })]
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Canvas, {
					shadows: true,
					dpr: reducedMotion ? 1 : [1, 1.5],
					camera: {
						position: [
							0,
							.1,
							9
						],
						fov: 38
					},
					gl: {
						antialias: true,
						alpha: true
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductScene, { reducedMotion })
				})
			})
		]
	});
}
function StoryCard({ className, label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: `story-card ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), children]
	});
}
function FlavourSelector() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flavour-selector",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flavour-active",
			children: content.product.flavour
		}), content.product.otherFlavours.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flavour-soon",
			children: item
		}, item))]
	});
}
function ScrollExperience() {
	const rootRef = (0, import_react.useRef)(null);
	const reducedMotion = useReducedMotion();
	useScrollStory(rootRef, reducedMotion);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "home",
		ref: rootRef,
		className: `scroll-experience ${reducedMotion ? "reduced" : ""}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "story-stage",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "story-kicker",
					children: content.brand.tagline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "story-title title-one",
					children: [
						"MAKE EVERY",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"BITE COUNT."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "story-title title-two",
					children: [
						"FIND YOUR",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"FLAVOUR"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "story-title title-three",
					children: [
						"HAPPY",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"SNACKING"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCanvas, { reducedMotion }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCard, {
					className: "origin-card",
					label: "ORIGIN",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: content.product.origin })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCard, {
					className: "moringa-card",
					label: "MORINGA",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: content.product.moringa })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StoryCard, {
					className: "nutrition-card",
					label: "NUTRITION · PER 100 G (APPROX.)",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "nutrition-table",
						children: content.product.nutrition.map(([item, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: value })] }, item))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Sample data — verify before launch." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flavour-panel",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlavourSelector, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "final-actions",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "lg",
						children: ["Shop Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						variant: "outline",
						children: "Partner with Ha Bite"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "scroll-cue",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SCROLL TO EXPLORE" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "story-index",
					children: "01 / 01"
				})
			]
		})
	});
}
function BrandStory() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "about-us",
		className: "section story-section",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-label",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "04" }), " BRAND STORY"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "story-layout",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "script",
				children: [
					"Small bites.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"Big goodness."
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: content.story })]
		})]
	});
}
function CustomerReviews() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "section reviews-section",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-label",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "05" }), " CUSTOMER REVIEWS"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "empty-reviews",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: content.placeholders.reviews }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No made-up praise. Real reviews will appear here." })
			]
		})]
	});
}
var product_pack_webp_asset_default = {
	version: 1,
	asset_id: "d5971cbc-c115-4bdc-bfd4-ae45a8c25bc0",
	project_id: "535c303b-ef73-4214-b447-4ab5c2a23dd9",
	url: "/__l5e/assets-v1/d5971cbc-c115-4bdc-bfd4-ae45a8c25bc0/product-pack.webp",
	r2_key: "a/v1/535c303b-ef73-4214-b447-4ab5c2a23dd9/d5971cbc-c115-4bdc-bfd4-ae45a8c25bc0/product-pack.webp",
	original_filename: "product-pack.webp",
	size: 82568,
	content_type: "image/webp",
	created_at: "2026-10-04T14:09:57Z"
};
function FeaturedProduct() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "shop",
		className: "section featured-section",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-label",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01" }), " FEATURED PRODUCT"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "featured-grid",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "product-image-wrap",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: product_pack_webp_asset_default.url,
					alt: "Ha Bite Roasted Makhana Tikka and Moringa Fusion, 50 gram tube"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "product-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow",
						children: ["ROASTED MAKHANA · ", content.product.weight]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: content.product.name }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "script",
						children: content.product.flavour
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: content.story }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "lg",
						title: content.placeholders.commerce,
						children: ["Add to Cart ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: content.placeholders.commerce })
				]
			})]
		})]
	});
}
function Newsletter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "newsletter",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "THE GOOD STUFF, OCCASIONALLY"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
				"JOIN THE",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"BITE CLUB."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (event) => event.preventDefault(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "email",
						children: "EMAIL ADDRESS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "email",
						type: "email",
						placeholder: "you@example.com",
						"aria-label": "Email address"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "icon",
						"aria-label": "Join newsletter",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
					})
				]
			})
		]
	});
}
function ProductRange() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "section range-section",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-label",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "03" }), " EXPLORE OUR RANGE"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "range-head",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
					"ONE GOOD BITE.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"MORE TO COME."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Our first flavour leads the way. The next chapter is still roasting." })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "range-product",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product_pack_webp_asset_default.url,
						alt: "Ha Bite roasted makhana tube"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01 / MAKHANA" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: content.product.flavour }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: content.product.weight })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "coming-strip",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "MORE FLAVOURS" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "COMING SOON" })]
			})
		]
	});
}
var icons = {
	leaf: Leaf,
	spark: Sparkles,
	shield: ShieldCheck,
	grain: WheatOff
};
function WhyHaBite() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "section why-section",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-label",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "02" }), " WHY HA BITE"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
				"GOODNESS IN",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"EVERY BITE."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "benefit-grid",
				children: content.product.benefits.map(([icon, label]) => {
					const Icon = icons[icon];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "benefit",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
					}, label);
				})
			})
		]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandIntro, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollExperience, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedProduct, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyHaBite, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductRange, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandStory, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomerReviews, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newsletter, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {})
	] });
}
//#endregion
export { Index as component };
