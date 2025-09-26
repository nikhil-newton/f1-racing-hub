# Circuit Images Guide

## Overview
This guide ensures circuit image modal functionality works correctly and prevents mapping issues.

## Circuit ID to Image File Mapping

The following circuits have custom image file names that differ from their circuit IDs:

| Circuit ID | Image File Name | Grand Prix |
|------------|----------------|------------|
| `china` | `chinese-circuit.jpg` | Chinese Grand Prix |
| `canada` | `canadian-circuit.jpg` | Canadian Grand Prix |
| `spain` | `spanish-circuit.jpg` | Spanish Grand Prix |
| `britain` | `british-circuit.jpg` | British Grand Prix |
| `belgium` | `belgian-circuit.jpg` | Belgian Grand Prix |
| `netherlands` | `dutch-circuit.jpg` | Dutch Grand Prix |
| `brazil` | `sao-paulo-circuit.jpg` | São Paulo Grand Prix |
| `japan` | `japanese-circuit.jpg` | Japanese Grand Prix |

## Standard Naming Circuits
These circuits follow the standard `{circuitId}-circuit.jpg` naming pattern:
- bahrain, saudi-arabia, australia, miami, emilia-romagna, monaco, austria, azerbaijan, singapore, las-vegas, qatar, abu-dhabi, hungary, italy, usa, mexico

## Adding New Circuits

When adding a new circuit:

1. **Add circuit data** in `src/data/circuits.ts`
2. **Download circuit image** to `public/circuits/` directory
3. **Update mapping** in `getCircuitImageName()` function in `src/pages/CircuitsPage.tsx` if image name differs from `{circuitId}-circuit.jpg`
4. **Test the modal** by clicking on the circuit image

## Image Requirements

- **Format**: JPG preferred for consistency
- **Size**: High resolution (1200px+ width recommended)
- **Aspect ratio**: Circuit layout should be clearly visible
- **Naming**: Use kebab-case (lowercase with hyphens)

## Error Handling

The system includes:
- **Loading states**: Spinner while image loads
- **Error fallback**: Error message if image fails to load
- **Validation**: Console warnings for unmapped circuits
- **Debugging**: Image path logging for troubleshooting

## Troubleshooting

If a circuit modal shows wrong image:
1. Check console for validation warnings
2. Verify image file exists in `public/circuits/`
3. Check `getCircuitImageName()` mapping in `CircuitsPage.tsx`
4. Ensure circuit ID matches exactly

## File Locations

- **Circuit Data**: `src/data/circuits.ts`
- **Image Mapping**: `src/pages/CircuitsPage.tsx` (getCircuitImageName function)  
- **Modal Component**: `src/components/CircuitImageModal.tsx`
- **Image Files**: `public/circuits/`

## Validation

The app automatically validates circuit image mapping on startup and logs results to console:
- ✅ All circuits properly mapped
- ⚠️ Potential mapping issues detected