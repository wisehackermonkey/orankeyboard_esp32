import { ESP32_S3_MINI_1_N8 } from "./imports/ESP32_S3_MINI_1_N8"
import { TF_01A } from "./imports/TF_01A"
import { HS1602A_B } from "./imports/HS1602A_B"
import { TYPE_C_16PIN_2MD_073_ } from "./imports/TYPE_C_16PIN_2MD_073_"
import { SY8088AAC } from "./imports/SY8088AAC"
import { FXL0630_3R3_M } from "./imports/FXL0630_3R3_M"
import { TS_1187A_B_A_B } from "./imports/TS_1187A_B_A_B"

// ---------------------------------------------------------------------------
// orankeyboard_esp32
//
//  - ESP32-S3-MINI-1-N8 module (C2913206)
//  - USB-C #1 = 5V power in (C2765186) -> SY8088AAC buck -> 3.3V
//  - USB-C #2 = USB keyboard host port (C2765186), ESP32-S3 native USB
//  - microSD socket TF-01A on SPI (C91145)
//  - HD44780 16x2 character LCD HS1602A-B, 4-bit parallel (C18198249)
// ---------------------------------------------------------------------------

// Every ground pad of the ESP32-S3-MINI-1 module (the shared thermal pad
// pin61 is stitched to GND with a copper pour-friendly via field by hand)
const ESP32_GND_PINS = [
  1, 2, 42, 43, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
]

export default () => (
  <board
    name="orankeyboard_esp32"
    width="100mm"
    height="80mm"
    layers={2}
    minTraceToPadEdgeClearance="0.2mm"
  >
    {/* ---------------- board mechanical ---------------- */}
    <hole name="H1" pcbX={-45} pcbY={35} diameter="3.2mm" />
    <hole name="H2" pcbX={45} pcbY={35} diameter="3.2mm" />
    <hole name="H3" pcbX={-45} pcbY={-35} diameter="3.2mm" />
    <hole name="H4" pcbX={45} pcbY={-35} diameter="3.2mm" />

    {/* GND planes (also stitch the ESP32 thermal pad to ground) */}
    <copperpour
      connectsTo="net.GND"
      layer="top"
      clearance="0.15mm"
      boardEdgeMargin="0.3mm"
    />
    <copperpour
      connectsTo="net.GND"
      layer="bottom"
      clearance="0.15mm"
      boardEdgeMargin="0.3mm"
    />

    {/* ================================================================ */}
    {/* 5V POWER INPUT - USB-C #1 (sink, 5.1k CC pulldowns)              */}
    {/* ================================================================ */}
    <TYPE_C_16PIN_2MD_073_
      name="USBPWR"
      pcbX={-44.5}
      pcbY={-4}
      pcbRotation="270deg"
    />
    <resistor
      name="R_CC1"
      resistance="5.1k"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C125891"] }}
      pcbX={-48}
      pcbY={-14}
    />
    <resistor
      name="R_CC2"
      resistance="5.1k"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C125891"] }}
      pcbX={-44.5}
      pcbY={-17}
    />

    {/* ================================================================ */}
    {/* 5V -> 3.3V BUCK (SY8088AAC, 3.3uH, 100k/22k feedback)            */}
    {/* ================================================================ */}
    <SY8088AAC name="U_BUCK" pcbX={-36.5} pcbY={-4} />
    <FXL0630_3R3_M name="L1" pcbX={-29} pcbY={-6} />
    <capacitor
      name="C_IN"
      capacitance="10uF"
      footprint="0805"
      supplierPartNumbers={{ jlcpcb: ["C15850"] }}
      pcbX={-41}
      pcbY={-12.5}
    />
    <capacitor
      name="C_OUT"
      capacitance="22uF"
      footprint="0805"
      supplierPartNumbers={{ jlcpcb: ["C45783"] }}
      pcbX={-27}
      pcbY={-13}
    />
    <capacitor
      name="C_OUT_HF"
      capacitance="100nF"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C1525"] }}
      pcbX={-31}
      pcbY={-13}
    />
    <resistor
      name="R_FB_TOP"
      resistance="100k"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C25741"] }}
      pcbX={-36}
      pcbY={-13}
    />
    <resistor
      name="R_FB_BOT"
      resistance="22k"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C25768"] }}
      pcbX={-36}
      pcbY={-16}
    />
    <resistor
      name="R_EN_BUCK"
      resistance="100k"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C25741"] }}
      pcbX={-34.5}
      pcbY={-11}
    />

    {/* ================================================================ */}
    {/* ESP32-S3-MINI-1-N8                                               */}
    {/* ================================================================ */}
    <ESP32_S3_MINI_1_N8 name="U_ESP" 
      // pcbRotation="180deg"
      pcbX={-10} 
      pcbY={-18} />

    <capacitor
      name="C_ESP_BULK"
      capacitance="10uF"
      footprint="0805"
      supplierPartNumbers={{ jlcpcb: ["C15850"] }}
      pcbX={-2}
      pcbY={-27}
    />
    <capacitor
      name="C_ESP_HF"
      capacitance="100nF"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C1525"] }}
      pcbX={-8}
      pcbY={-27}
    />
    <resistor
      name="R_EN"
      resistance="10k"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C25804"] }}
      pcbX={-21}
      pcbY={-12}
    />
    <capacitor
      name="C_EN"
      capacitance="1uF"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C15849"] }}
      pcbX={-21}
      pcbY={-15}
    />
    <resistor
      name="R_BOOT"
      resistance="10k"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C25804"] }}
      pcbX={0}
      pcbY={-20}
    />
    <TS_1187A_B_A_B name="SW_RESET" pcbX={-12} pcbY={-31} />
    <TS_1187A_B_A_B name="SW_BOOT" pcbX={2} pcbY={-31} />

    {/* ================================================================ */}
    {/* USB-C #2 - KEYBOARD HOST (source, 22k Rp on CC)                  */}
    {/* ================================================================ */}
    <TYPE_C_16PIN_2MD_073_
      name="USBKBD"
      pcbX={44.5}
      pcbY={-6}
      pcbRotation="90deg"
    />
    <resistor
      name="R_RP1"
      resistance="22k"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C25768"] }}
      pcbX={43}
      pcbY={-16}
    />
    <resistor
      name="R_RP2"
      resistance="22k"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C25768"] }}
      pcbX={38}
      pcbY={-16}
    />

    {/* ================================================================ */}
    {/* microSD - TF-01A on SPI                                          */}
    {/* ================================================================ */}
    <TF_01A name="J_SD" pcbX={26} pcbY={-30} />
    <resistor
      name="R_SD_CD"
      resistance="10k"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C25804"] }}
      pcbX={13}
      pcbY={-14}
    />
    <capacitor
      name="C_SD"
      capacitance="100nF"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C1525"] }}
      pcbX={13}
      pcbY={-22}
    />

    {/* ================================================================ */}
    {/* 16x2 CHARACTER LCD - HS1602A-B, 4-bit parallel                   */}
    {/* ================================================================ */}
    <HS1602A_B name="U_LCD"
        layer="bottom"
    pcbX={0} pcbY={20} />
    <resistor
      name="R_V0_TOP"
      resistance="100k"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C25741"] }}
      pcbX={-8}
      pcbY={-2}
    />
    <resistor
      name="R_V0_BOT"
      resistance="22k"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C25768"] }}
      pcbX={-4}
      pcbY={-2}
    />
    <resistor
      name="R_LED"
      resistance="100"
      footprint="0805"
      supplierPartNumbers={{ jlcpcb: ["C17408"] }}
      pcbX={10}
      pcbY={-2}
    />

    {/* ================================================================ */}
    {/* POWER NETS                                                      */}
    {/* ================================================================ */}
    {/* USB-C #1 VBUS -> 5V rail */}
    <trace from="USBPWR.VBUS1" to="net.V5" />
    <trace from="USBPWR.VBUS2" to="net.V5" />
    {/* USB-C #1 CC pulldowns (USB-C sink) */}
    <trace from="R_CC1.pin1" to="USBPWR.CC1" />
    <trace from="R_CC1.pin2" to="net.GND" />
    <trace from="R_CC2.pin1" to="USBPWR.CC2" />
    <trace from="R_CC2.pin2" to="net.GND" />
    {/* USB-C #1 grounds / shell */}
    <trace from="USBPWR.GND1" to="net.GND" />
    <trace from="USBPWR.GND2" to="net.GND" />
    <trace from="USBPWR.EH1" to="net.GND" />
    <trace from="USBPWR.EH2" to="net.GND" />

    {/* buck input */}
    <trace from="C_IN.pin1" to="net.V5" />
    <trace from="C_IN.pin2" to="net.GND" />
    <trace from="U_BUCK.IN" to="net.V5" />
    <trace from="U_BUCK.GND" to="net.GND" />
    <trace from="R_EN_BUCK.pin1" to="net.V5" />
    <trace from="R_EN_BUCK.pin2" to="U_BUCK.EN" />
    {/* buck switch node + inductor */}
    <trace from="U_BUCK.LX" to="L1.pin1" />
    <trace from="L1.pin2" to="net.V3_3" />
    {/* buck feedback divider: 0.6V * (1 + 100k/22k) = 3.33V */}
    <trace from="U_BUCK.FB" to="net.BUCK_FB" />
    <trace from="R_FB_TOP.pin1" to="net.V3_3" />
    <trace from="R_FB_TOP.pin2" to="net.BUCK_FB" />
    <trace from="R_FB_BOT.pin1" to="net.BUCK_FB" />
    <trace from="R_FB_BOT.pin2" to="net.GND" />
    {/* buck output */}
    <trace from="C_OUT.pin1" to="net.V3_3" />
    <trace from="C_OUT.pin2" to="net.GND" />
    <trace from="C_OUT_HF.pin1" to="net.V3_3" />
    <trace from="C_OUT_HF.pin2" to="net.GND" />

    {/* ================================================================ */}
    {/* ESP32 POWER / RESET / BOOT                                       */}
    {/* ================================================================ */}
    <trace from="U_ESP.3V3" to="net.V3_3" />
    {ESP32_GND_PINS.map((pin) => (
      <trace key={pin} from={`U_ESP.pin${pin}`} to="net.GND" />
    ))}
    <trace from="C_ESP_BULK.pin1" to="net.V3_3" />
    <trace from="C_ESP_BULK.pin2" to="net.GND" />
    <trace from="C_ESP_HF.pin1" to="net.V3_3" />
    <trace from="C_ESP_HF.pin2" to="net.GND" />
    {/* EN: 10k pull-up + 1uF + reset button */}
    <trace from="R_EN.pin1" to="net.V3_3" />
    <trace from="R_EN.pin2" to="net.EN_ESP" />
    <trace from="C_EN.pin1" to="net.EN_ESP" />
    <trace from="C_EN.pin2" to="net.GND" />
    <trace from="U_ESP.EN" to="net.EN_ESP" />
    <trace from="SW_RESET.pin1" to="net.EN_ESP" />
    <trace from="SW_RESET.pin4" to="net.GND" />
    {/* BOOT (IO0): 10k pull-up + button */}
    <trace from="R_BOOT.pin1" to="net.V3_3" />
    <trace from="R_BOOT.pin2" to="net.BOOT0" />
    <trace from="U_ESP.IO0" to="net.BOOT0" />
    <trace from="SW_BOOT.pin1" to="net.BOOT0" />
    <trace from="SW_BOOT.pin4" to="net.GND" />

    {/* ================================================================ */}
    {/* USB KEYBOARD HOST PORT                                           */}
    {/* ================================================================ */}
    {/* 5V to the keyboard (bus powered from USB-C #1) */}
    <trace from="USBKBD.VBUS1" to="net.V5" />
    <trace from="USBKBD.VBUS2" to="net.V5" />
    {/* CC: 22k pull-ups to VBUS advertise a 5V/1.5A source */}
    <trace from="R_RP1.pin1" to="USBKBD.CC1" />
    <trace from="R_RP1.pin2" to="net.V5" />
    <trace from="R_RP2.pin1" to="USBKBD.CC2" />
    <trace from="R_RP2.pin2" to="net.V5" />
    {/* grounds / shell */}
    <trace from="USBKBD.GND1" to="net.GND" />
    <trace from="USBKBD.GND2" to="net.GND" />
    <trace from="USBKBD.EH1" to="net.GND" />
    <trace from="USBKBD.EH2" to="net.GND" />
    {/* ESP32-S3 native USB: GPIO19 = D-, GPIO20 = D+ */}
    <trace from="USBKBD.Dp1" to="net.USB_DP" />
    <trace from="USBKBD.Dp2" to="net.USB_DP" />
    <trace from="USBKBD.Dn1" to="net.USB_DM" />
    <trace from="USBKBD.Dn2" to="net.USB_DM" />
    <trace from="U_ESP.IO20" to="net.USB_DP" />
    <trace from="U_ESP.IO19" to="net.USB_DM" />

    {/* ================================================================ */}
    {/* microSD SPI                                                      */}
    {/* ================================================================ */}
    <trace from="J_SD.VDD" to="net.V3_3" />
    <trace from="J_SD.VSS" to="net.GND" />
    <trace from="J_SD.GND1" to="net.GND" />
    <trace from="J_SD.GND2" to="net.GND" />
    <trace from="J_SD.GND3" to="net.GND" />
    <trace from="J_SD.GND4" to="net.GND" />
    <trace from="J_SD.CDDAT3_CS" to="net.SD_CS" />
    <trace from="J_SD.CMD_DI" to="net.SD_MOSI" />
    <trace from="J_SD.CLK_SCLK" to="net.SD_SCLK" />
    <trace from="J_SD.DAT0_D0" to="net.SD_MISO" />
    <trace from="U_ESP.IO10" to="net.SD_CS" />
    <trace from="U_ESP.IO11" to="net.SD_MOSI" />
    <trace from="U_ESP.IO12" to="net.SD_SCLK" />
    <trace from="U_ESP.IO13" to="net.SD_MISO" />
    {/* card detect with 10k pull-up */}
    <trace from="J_SD.CD" to="net.SD_CD" />
    <trace from="R_SD_CD.pin1" to="net.V3_3" />
    <trace from="R_SD_CD.pin2" to="net.SD_CD" />
    <trace from="U_ESP.IO14" to="net.SD_CD" />
    <trace from="C_SD.pin1" to="net.V3_3" />
    <trace from="C_SD.pin2" to="net.GND" />

    {/* ================================================================ */}
    {/* LCD (4-bit parallel, RW tied low)                                */}
    {/* ================================================================ */}
    <trace from="U_LCD.VSS" to="net.GND" />
    <trace from="U_LCD.VDD" to="net.V5" />
    <trace from="U_LCD.RW" to="net.GND" />
    {/* contrast divider: 5V * 22k/(100k+22k) ~ 0.9V at V0 */}
    <trace from="U_LCD.V0" to="net.LCD_V0" />
    <trace from="R_V0_TOP.pin1" to="net.V5" />
    <trace from="R_V0_TOP.pin2" to="net.LCD_V0" />
    <trace from="R_V0_BOT.pin1" to="net.LCD_V0" />
    <trace from="R_V0_BOT.pin2" to="net.GND" />
    {/* backlight: 5V -> 100R -> A, K -> GND */}
    <trace from="R_LED.pin1" to="net.V5" />
    <trace from="R_LED.pin2" to="U_LCD.LED_POS" />
    <trace from="U_LCD.LED_NEG" to="net.GND" />
    {/* control lines */}
    <trace from="U_LCD.RS" to="net.LCD_RS" />
    <trace from="U_LCD.E" to="net.LCD_E" />
    <trace from="U_LCD.DB4" to="net.LCD_D4" />
    <trace from="U_LCD.DB5" to="net.LCD_D5" />
    <trace from="U_LCD.DB6" to="net.LCD_D6" />
    <trace from="U_LCD.DB7" to="net.LCD_D7" />
    <trace from="U_ESP.IO4" to="net.LCD_RS" />
    <trace from="U_ESP.IO5" to="net.LCD_E" />
    <trace from="U_ESP.IO6" to="net.LCD_D4" />
    <trace from="U_ESP.IO7" to="net.LCD_D5" />
    <trace from="U_ESP.IO8" to="net.LCD_D6" />
    <trace from="U_ESP.IO9" to="net.LCD_D7" />
  </board>
)

