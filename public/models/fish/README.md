# Fish 3D Model Assets

Put licensed, launch-ready fish models in this folder as `.glb` or `.gltf`
files, then reference them from `src/data/site.ts` with `modelSrc`.

Recommended filenames:

- `flounder.glb`
- `rockfish.glb`
- `bluefish.glb`
- `tautog.glb`
- `sheepshead.glb`
- `red-drum.glb`
- `croaker.glb`
- `ray.glb`

Only add models the business owns, purchased, commissioned, or has a
commercial-safe license to use. Do not add files marked NonCommercial,
Personal/Education, Editorial-only, or files without a clear license.

When using CC BY assets, fill in `modelCredit`, `modelLicense`, and
`modelSourceUrl` in `src/data/site.ts`. Keep a copy of each license receipt or
license screenshot with the launch records.

Current included model:

- `artec-scanned-fish.glb` is a converted and optimized version of Artec 3D's
  free scanned fish model. It is licensed under CC BY 3.0 and requires
  attribution to Artec 3D. The full downloaded license text is kept beside the
  model as `artec-scanned-fish-license.txt`.

This model is a real scanned fish, but it is not a species-exact Ocean City
target. The site currently reuses it as a shared high-realism placeholder for
the finfish viewer, with per-species tinting, proportions, and markings in the
Three.js layer. Replace each `modelSrc` in `src/data/site.ts` as exact
purchased/commissioned models become available.
