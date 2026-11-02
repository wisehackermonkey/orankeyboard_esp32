import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["EN"],
  pin2: ["GND"],
  pin3: ["LX"],
  pin4: ["IN"],
  pin5: ["FB"]
} as const

const pinAttributes = {
  pin2: {requiresGround: true}
} as const

export const SY8088AAC = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C79313"
  ]
}}
      manufacturerPartNumber="SY8088AAC"
      footprint="sot25_w2.6mm_pl1.1mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C79313.obj?uuid=460193f9bf2d42e58cf3c2f675b07dc6",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C79313.step?uuid=460193f9bf2d42e58cf3c2f675b07dc6",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: 0, y: -0.000012700000070253736, z: -0.049083 },
      }}
      {...props}
    />
  )
}