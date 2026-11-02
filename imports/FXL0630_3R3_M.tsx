import type { InductorProps } from "@tscircuit/props"

export const FXL0630_3R3_M = (props: Omit<InductorProps, "inductance">) => {
  return (
    <inductor
      inductance="3.3uH"
      supplierPartNumbers={{
  "jlcpcb": [
    "C167219"
  ]
}}
      manufacturerPartNumber="FXL0630-3R3-M"
      footprint="smdpads2_p6mm_pw2.4mm_ph3.2mm_cyw8.9mm_cyh7.1mm"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C167219.obj?uuid=d792f813c1054fc4ac994ff75db25e02",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C167219.step?uuid=d792f813c1054fc4ac994ff75db25e02",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.00010159999987990886, y: 0.000500000000000167, z: 0 },
      }}
      {...props}
    />
  )
}