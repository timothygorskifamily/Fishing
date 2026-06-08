# Real Fish 3D Model Candidates

These are researched candidates for replacing the current procedural fish lab
models. Use exact-species, commercial-safe models for launch when possible.

## Best Commercial Candidates

| Species | Candidate | License note | Formats / notes |
| --- | --- | --- | --- |
| Rockfish / striped bass | [TurboSquid Striped Bass](https://www.turbosquid.com/3d-models/striped-bass-fish-max/1263597) | Paid Standard License candidate | OBJ, rigged/animated listing |
| Bluefish | [TurboSquid Bluefish](https://www.turbosquid.com/3d-models/bluefish-pbr-3d-model/1291699) | Paid Standard License candidate | FBX, OBJ, glTF, USDZ, PBR textures |
| Flounder | [TurboSquid Flounder Fish](https://www.turbosquid.com/3d-models/flounder-fish-2545364) | Paid Standard License candidate | FBX, OBJ, Collada, textures |
| Sheepshead | [CGTrader Sheepshead fish Animated](https://www.cgtrader.com/3d-models/animal/fish/sheepshead-fish-animated) | Paid Royalty Free candidate | FBX, OBJ, Blend, Maya, PBR textures |
| Red drum / redfish | [TurboSquid Red Drum](https://www.turbosquid.com/3d-models/red-drum-3d-1208166) | Paid Standard License candidate | FBX, textured |
| Croaker | [FlippedNormals Atlantic Croaker fish](https://flippednormals.com/product/atlantic-croaker-fish-66477) | Commercial License candidate | Blend, C4D, FBX, OBJ, 4K textures |
| Rays / bowfishing | [FlippedNormals Atlantic Stingray fish](https://flippednormals.com/product/atlantic-stingray-fish-66480) | Commercial License candidate | Blend, C4D, FBX, OBJ, 4K textures |

## Free Or Scientific Assets

| Species | Candidate | Why it is not a clean launch asset |
| --- | --- | --- |
| Generic fish scan | [Artec 3D Fish](https://www.artec3d.com/3d-models/fish) | Added to the site as `artec-scanned-fish.glb`; commercial use is allowed with attribution, but it is not species-exact |
| Striped bass | [DigitalLife3D Striped Bass](https://sketchfab.com/3d-models/model-69b-striped-bass-mesh-9dd0362823304dbf86a30af54b169012) | Excellent photogrammetry/scientific source, but CC BY-NC and non-profit only unless separately licensed |
| Flounder relatives | [ffish.asia / floraZia CC0 blackfin flounder](https://sketchfab.com/3d-models/blackfin-flounder-glyptocephalus-stelleri-68276a26e93c463e88421b5097b032ea) | Commercial-safe CC0, but not summer flounder and very high-poly |
| Cownose ray | [Sketchfab Cownose Ray by kenchoo](https://sketchfab.com/3d-models/cownose-ray-c7c51649007e4afba58416b15d891bf4) | CC BY and downloadable, but requires attribution and quality/species review |
| Tautog | [Sketchfab Tautog Fish Model](https://sketchfab.com/3d-models/tautog-fish-model-478e0b32f7624ca5885c0c02636c7305) | Visible online, but no download button or license shown |
| Tautog | [Open3DModel Tautog Blackfish](https://open3dmodel.com/3d-models/3d-model-tautog-blackfish-fish-animal_137370.html) | Marked Personal/Education, so not suitable for a business site |
| Red drum | [Florida Museum Red Drum](https://sketchfab.com/3d-models/red-drum-sciaenidae-37b0a2a96f564976bf45c6e2e8174154) | Scientific scan exists, but download/license needs separate review and optimization |

## Integration Steps

1. Purchase, commission, or obtain commercial-safe `.fbx`, `.obj`, `.blend`, or
   `.glb` files.
2. Convert each model to compressed `.glb` in Blender.
3. Optimize texture size for the web, ideally 2K or 4K max per model.
4. Put final files in `public/models/fish/`.
5. Set `modelSrc`, `modelCredit`, `modelLicense`, and `modelSourceUrl` in
   `src/data/site.ts`.
6. Run `npm run build` and inspect `/trips/#fish-models` on mobile and desktop.
