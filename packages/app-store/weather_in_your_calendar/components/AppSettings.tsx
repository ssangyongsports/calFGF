import { useState } from "react";

import { useLocale } from "@calcom/lib/hooks/useLocale";
import Button from "@calcom/ui/v2/core/Button";
import { TextField } from "@calcom/ui/v2/core/form/fields";

/* 
import * as Radio from "@calcom/ui/v2/core/form/radio-area/Radio";
import { RadioField } from "@calcom/ui/v2/core/form/radio-area/Radio"; 
*/

export default function AppSettings() {
  const { t } = useLocale();
  //const [units, setUnits] = useState<"metric" | "imperial">("metric");
  const unit = "metric";
  const [location, setLocation] = useState("");

  return (
    <div className="space-y-4 px-4 pt-4 pb-4 text-sm">
      <TextField
        placeholder="San Francisco"
        value={location}
        name="Enter City"
        onChange={async (e) => {
          setLocation(e.target.value);
        }}
      />
      {/* <Radio.Group onChange={(val) => alert(val)} aria-label="Set unit" defaultValue="metric">
        <RadioField label="°C Celsius" id="metric" value="metric" />
        <RadioField label="°F Fahrenheit" id="imperial" value="imperial" />
      </Radio.Group> */}
      <Button
        href={`webcal://weather-in-calendar.com/cal/weather-cal.php?city=${location}&units=${unit}&temperature=day`}>
        {t("add_to_calendar")}
      </Button>
    </div>
  );
}
