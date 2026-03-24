import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const DATA = {
  "All Channel": {
    nGender: 2139, nProf: 2093, nAge: 2136, nSeg: 3161, nParty: 2138, nResearch: 2192, nCommon: 2134,
    gender: { Male: 68.5, Female: 26.7, Undetermined: 2.5 },
    profession: { "Business Professional": 31.2, "Blue Collar Worker": 25.0, Student: 14.3, Retail: 10.6, Retired: 5.9, Educator: 5.3, "Home Care": 3.4 },
    age: { "25–40": 53.0, "41–56": 22.5, "13–24": 14.9, "57–75": 5.5, "<12": 1.4, "76+": 0.3 },
    segmentInterest: { Wearables: 73, Metaverse: 21, "Competitor's Product": 1 },
    shoppingParty: { Alone: 41.6, "With Family": 23.5, "With Friends": 17.7, "With Significant Other": 14.9 },
    research: { "In-Store Demo": 30.3, "Online / Google": 23.4, "Word of Mouth": 20.6, Unsure: 10.1, "Returning Customer": 5.3, Other: 5.9, "AI Chat": 3.7, "Demo at Other Retailer": 0.7 },
    genderSeg: {
      Female: { Wearables: 74, Metaverse: 20, "Competitor's Product": 1 },
      Male: { Wearables: 73, Metaverse: 21, "Competitor's Product": 1 },
      Undetermined: { Wearables: 69, Metaverse: 25, "Competitor's Product": 0 },
    },
    genderParty: {
      Female: { Alone: 36.9, "With Family": 27.2, "With Friends": 19.8, "With Significant Other": 16.1 },
      Male: { Alone: 45.3, "With Family": 22.0, "With Friends": 17.4, "With Significant Other": 15.2 },
      Undetermined: { Alone: 27.3, "With Family": 45.5, "With Friends": 20.0, "With Significant Other": 7.3 },
    },
    genderResearch: {
      Female: { "In-Store Demo": 30.3, "Online / Google": 23.1, "Word of Mouth": 20.6, Unsure: 11.6, "Returning Customer": 3.5, Other: 6.2, "AI Chat": 4.0, "Demo at Other Retailer": 0.6 },
      Male: { "In-Store Demo": 30.2, "Online / Google": 23.8, "Word of Mouth": 20.6, Unsure: 9.2, "Returning Customer": 6.1, Other: 5.7, "AI Chat": 3.7, "Demo at Other Retailer": 0.7 },
      Undetermined: { "In-Store Demo": 31.6, "Online / Google": 16.5, "Word of Mouth": 20.3, Unsure: 17.7, "Returning Customer": 3.8, Other: 6.3, "AI Chat": 1.3, "Demo at Other Retailer": 2.5 },
    },
    common: {
      Male: { "25–40": 36.8, "41–56": 15.4, "13–24": 11.3, "57–75": 3.4, "<12": 1.2 },
      Female: { "25–40": 14.7, "41–56": 6.2, "13–24": 3.4, "57–75": 2.1, "<12": 0.1 },
    }
  },
  "Best Buy US": {
    nGender: 1201, nProf: 1167, nAge: 1200, nSeg: 1916, nParty: 1201, nResearch: 1677, nCommon: 1199,
    gender: { Male: 69.2, Female: 26.6, Undetermined: 1.8 },
    profession: { "Business Professional": 29.0, "Blue Collar Worker": 30.5, Student: 14.5, Retail: 7.6, Retired: 4.5, Educator: 5.8, "Home Care": 2.8 },
    age: { "25–40": 53.3, "41–56": 21.7, "13–24": 16.3, "57–75": 5.1, "<12": 0.9, "76+": 0.2 },
    segmentInterest: { Wearables: 79, Metaverse: 20, "Competitor's Product": 1 },
    shoppingParty: { Alone: 35.7, "With Family": 26.6, "With Friends": 16.2, "With Significant Other": 20.1 },
    research: { "In-Store Demo": 34.2, "Online / Google": 26.4, "Word of Mouth": 21.0, Unsure: 10.0, "Returning Customer": 5.7, Other: 0, "AI Chat": 2.1, "Demo at Other Retailer": 0.7 },
    genderSeg: {
      Female: { Wearables: 81, Metaverse: 19, "Competitor's Product": 0 },
      Male: { Wearables: 79, Metaverse: 20, "Competitor's Product": 1 },
      Undetermined: { Wearables: 68, Metaverse: 32, "Competitor's Product": 0 },
    },
    genderParty: {
      Female: { Alone: 32.7, "With Family": 29.7, "With Friends": 16.8, "With Significant Other": 20.8 },
      Male: { Alone: 38.4, "With Family": 26.5, "With Friends": 16.7, "With Significant Other": 18.4 },
      Undetermined: { Alone: 45.5, "With Family": 22.7, "With Friends": 22.7, "With Significant Other": 9.1 },
    },
    genderResearch: {
      Female: { "In-Store Demo": 36.2, "Online / Google": 26.4, "Word of Mouth": 21.1, Unsure: 10.4, "Returning Customer": 4.7, Other: 0, "AI Chat": 0.9, "Demo at Other Retailer": 0.2 },
      Male: { "In-Store Demo": 33.4, "Online / Google": 26.5, "Word of Mouth": 20.6, Unsure: 9.9, "Returning Customer": 6.1, Other: 0, "AI Chat": 2.5, "Demo at Other Retailer": 0.9 },
      Undetermined: { "In-Store Demo": 33.3, "Online / Google": 20.5, "Word of Mouth": 30.8, Unsure: 10.3, "Returning Customer": 2.6, Other: 0, "AI Chat": 2.6, "Demo at Other Retailer": 0 },
    },
    common: {
      Male: { "25–40": 38.7, "41–56": 14.5, "13–24": 12.3, "57–75": 3.0, "<12": 0.7 },
      Female: { "25–40": 13.9, "41–56": 6.4, "13–24": 3.8, "57–75": 2.1, "<12": 0.1 },
    }
  },
  "Best Buy Canada": {
    nGender: 538, nProf: 529, nAge: 538, nSeg: 954, nParty: 538, nResearch: 797, nCommon: 538,
    gender: { Male: 72.0, Female: 22.9, Undetermined: 2.2 },
    profession: { "Business Professional": 30.9, "Blue Collar Worker": 17.0, Student: 15.2, Retail: 17.1, Retired: 7.2, Educator: 3.4, "Home Care": 4.7 },
    age: { "25–40": 58.5, "41–56": 16.4, "13–24": 15.9, "57–75": 5.1, "<12": 1.1, "76+": 0.2 },
    segmentInterest: { Wearables: 76, Metaverse: 23, "Competitor's Product": 1 },
    shoppingParty: { Alone: 50.5, "With Family": 11.6, "With Friends": 26.2, "With Significant Other": 8.8 },
    research: { "In-Store Demo": 32.4, "Online / Google": 23.7, "Word of Mouth": 22.5, Unsure: 8.3, "Returning Customer": 5.4, Other: 0, "AI Chat": 7.2, "Demo at Other Retailer": 0.6 },
    genderSeg: {
      Female: { Wearables: 67, Metaverse: 32, "Competitor's Product": 1 },
      Male: { Wearables: 79, Metaverse: 20, "Competitor's Product": 1 },
      Undetermined: { Wearables: 77, Metaverse: 23, "Competitor's Product": 0 },
    },
    genderParty: {
      Female: { Alone: 41.7, "With Family": 18.9, "With Friends": 32.3, "With Significant Other": 7.1 },
      Male: { Alone: 55.9, "With Family": 9.3, "With Friends": 24.8, "With Significant Other": 10.0 },
      Undetermined: { Alone: 33.3, "With Family": 25.0, "With Friends": 41.7, "With Significant Other": 0 },
    },
    genderResearch: {
      Female: { "In-Store Demo": 32.0, "Online / Google": 22.7, "Word of Mouth": 22.2, Unsure: 9.4, "Returning Customer": 2.5, Other: 0, "AI Chat": 9.9, "Demo at Other Retailer": 1.5 },
      Male: { "In-Store Demo": 32.9, "Online / Google": 24.2, "Word of Mouth": 23.0, Unsure: 7.1, "Returning Customer": 6.3, Other: 0, "AI Chat": 6.4, "Demo at Other Retailer": 0.2 },
      Undetermined: { "In-Store Demo": 21.1, "Online / Google": 21.1, "Word of Mouth": 10.5, Unsure: 31.6, "Returning Customer": 10.5, Other: 0, "AI Chat": 0, "Demo at Other Retailer": 5.3 },
    },
    common: {
      Male: { "25–40": 43.5, "41–56": 11.2, "13–24": 12.3, "57–75": 3.8, "<12": 1.1 },
      Female: { "25–40": 13.9, "41–56": 4.7, "13–24": 3.1, "57–75": 1.3, "<12": 0 },
    }
  },
  "AT&T": {
    nGender: 83, nProf: 83, nAge: 83, nSeg: 83, nParty: 78, nResearch: 99, nCommon: 83,
    gender: { Male: 42.2, Female: 47.0, Undetermined: 10.8 },
    profession: { "Business Professional": 48.2, "Blue Collar Worker": 15.7, Student: 2.4, Retail: 8.4, Retired: 15.7, Educator: 8.4, "Home Care": 1.2 },
    age: { "25–40": 53.0, "41–56": 28.9, "13–24": 6.0, "57–75": 10.8, "76+": 1.2 },
    segmentInterest: { Wearables: 91, Metaverse: 6, "Competitor's Product": 3 },
    shoppingParty: { Alone: 49.4, "With Family": 22.9, "With Friends": 18.1, "With Significant Other": 8.4 },
    research: { "In-Store Demo": 22.2, "Online / Google": 18.2, "Word of Mouth": 25.3, Unsure: 24.2, "Returning Customer": 2.0, Other: 0, "AI Chat": 5.1, "Demo at Other Retailer": 3.0 },
    genderSeg: {
      Female: { Wearables: 87, Metaverse: 9, "Competitor's Product": 4 },
      Male: { Wearables: 97, Metaverse: 0, "Competitor's Product": 3 },
      Undetermined: { Wearables: 87, Metaverse: 13, "Competitor's Product": 0 },
    },
    genderParty: {
      Female: { Alone: 61.5, "With Family": 17.9, "With Friends": 15.4, "With Significant Other": 5.1 },
      Male: { Alone: 48.6, "With Family": 11.4, "With Friends": 22.9, "With Significant Other": 14.3 },
      Undetermined: { Alone: 0, "With Family": 88.9, "With Friends": 11.1, "With Significant Other": 0 },
    },
    genderResearch: {
      Female: { "In-Store Demo": 13.7, "Online / Google": 19.6, "Word of Mouth": 27.5, Unsure: 27.5, "Returning Customer": 3.9, Other: 0, "AI Chat": 5.9, "Demo at Other Retailer": 2.0 },
      Male: { "In-Store Demo": 28.2, "Online / Google": 17.9, "Word of Mouth": 23.1, Unsure: 20.5, "Returning Customer": 0, Other: 0, "AI Chat": 5.1, "Demo at Other Retailer": 5.1 },
      Undetermined: { "In-Store Demo": 44.4, "Online / Google": 11.1, "Word of Mouth": 22.2, Unsure: 22.2, "Returning Customer": 0, Other: 0, "AI Chat": 0, "Demo at Other Retailer": 0 },
    },
    common: {
      Male: { "25–40": 18.1, "41–56": 14.5, "13–24": 2.4, "57–75": 6.0, "<12": 0 },
      Female: { "25–40": 25.3, "41–56": 13.3, "13–24": 3.6, "57–75": 4.8, "<12": 0 },
    }
  },
  "T-Mobile": {
    nGender: 44, nProf: 44, nAge: 44, nSeg: 61, nParty: 44, nResearch: 59, nCommon: 44,
    gender: { Male: 48.9, Female: 40.0, Undetermined: 8.9 },
    profession: { "Business Professional": 35.6, "Blue Collar Worker": 11.1, Student: 6.7, Retail: 15.6, Retired: 8.9, Educator: 4.4, "Home Care": 15.6 },
    age: { "25–40": 55.6, "41–56": 26.7, "13–24": 4.4, "57–75": 8.9, "<12": 2.2 },
    segmentInterest: { Wearables: 95, Metaverse: 3, "Competitor's Product": 2 },
    shoppingParty: { Alone: 46.7, "With Family": 33.3, "With Friends": 8.9, "With Significant Other": 8.9 },
    research: { "In-Store Demo": 28.8, "Online / Google": 20.3, "Word of Mouth": 25.4, Unsure: 23.7, "Returning Customer": 1.7, Other: 0, "AI Chat": 0, "Demo at Other Retailer": 0 },
    genderSeg: {
      Female: { Wearables: 100, Metaverse: 0, "Competitor's Product": 0 },
      Male: { Wearables: 91, Metaverse: 6, "Competitor's Product": 3 },
      Undetermined: { Wearables: 100, Metaverse: 0, "Competitor's Product": 0 },
    },
    genderParty: {
      Female: { Alone: 38.9, "With Family": 33.3, "With Friends": 11.1, "With Significant Other": 16.7 },
      Male: { Alone: 63.6, "With Family": 22.7, "With Friends": 9.1, "With Significant Other": 4.5 },
      Undetermined: { Alone: 0, "With Family": 100, "With Friends": 0, "With Significant Other": 0 },
    },
    genderResearch: {
      Female: { "In-Store Demo": 18.2, "Online / Google": 13.6, "Word of Mouth": 31.8, Unsure: 36.4, "Returning Customer": 0, Other: 0, "AI Chat": 0, "Demo at Other Retailer": 0 },
      Male: { "In-Store Demo": 30.3, "Online / Google": 27.3, "Word of Mouth": 24.2, Unsure: 15.2, "Returning Customer": 3.0, Other: 0, "AI Chat": 0, "Demo at Other Retailer": 0 },
      Undetermined: { "In-Store Demo": 75.0, "Online / Google": 0, "Word of Mouth": 0, Unsure: 25.0, "Returning Customer": 0, Other: 0, "AI Chat": 0, "Demo at Other Retailer": 0 },
    },
    common: {
      Male: { "25–40": 22.2, "41–56": 22.2, "13–24": 4.4, "57–75": 0, "<12": 0 },
      Female: { "25–40": 24.4, "41–56": 4.4, "13–24": 0, "57–75": 8.9, "<12": 2.2 },
    }
  },
  "Nebraska Furniture Mart": {
    nGender: 64, nProf: 64, nAge: 62, nSeg: 95, nParty: 64, nResearch: 62, nCommon: 62,
    gender: { Male: 84.4, Female: 15.6 },
    profession: { "Business Professional": 32.8, "Blue Collar Worker": 14.1, Student: 35.9, Retail: 9.4, Retired: 1.6, Educator: 3.1 },
    age: { "25–40": 39.1, "41–56": 29.7, "13–24": 20.3, "<12": 7.8 },
    segmentInterest: { Wearables: 11, Metaverse: 89, "Competitor's Product": 0 },
    shoppingParty: { Alone: 35.9, "With Family": 53.1, "With Friends": 7.8, "With Significant Other": 3.1 },
    research: { "In-Store Demo": 0, "Online / Google": 17.7, "Word of Mouth": 32.3, Unsure: 17.7, "Returning Customer": 19.4, Other: 0, "AI Chat": 12.9, "Demo at Other Retailer": 0 },
    genderSeg: {
      Female: { Wearables: 11, Metaverse: 89, "Competitor's Product": 0 },
      Male: { Wearables: 10, Metaverse: 90, "Competitor's Product": 0 },
    },
    genderParty: {
      Female: { Alone: 0, "With Family": 50.0, "With Friends": 40.0, "With Significant Other": 10.0 },
      Male: { Alone: 42.6, "With Family": 53.7, "With Friends": 1.9, "With Significant Other": 1.9 },
    },
    genderResearch: {
      Female: { "In-Store Demo": 0, "Online / Google": 10.0, "Word of Mouth": 20.0, Unsure: 30.0, "Returning Customer": 0, Other: 0, "AI Chat": 40.0, "Demo at Other Retailer": 0 },
      Male: { "In-Store Demo": 0, "Online / Google": 19.2, "Word of Mouth": 34.6, Unsure: 15.4, "Returning Customer": 23.1, Other: 0, "AI Chat": 7.7, "Demo at Other Retailer": 0 },
    },
    common: {
      Male: { "25–40": 28.1, "41–56": 29.7, "13–24": 15.6, "57–75": 0, "<12": 7.8 },
      Female: { "25–40": 10.9, "41–56": 0, "13–24": 4.7, "57–75": 0, "<12": 0 },
    }
  },
};

const CHANNELS = Object.keys(DATA);
const C = {
  bg: "#0B1120", card: "#111827", border: "#1E293B",
  text: "#F1F5F9", sub: "#94A3B8", dim: "#64748B",
  blue: "#3B82F6", purple: "#8B5CF6", pink: "#EC4899", orange: "#F59E0B",
  green: "#10B981", cyan: "#06B6D4", red: "#EF4444", indigo: "#6366F1", magenta: "#D946EF",
};
const PROF_C = [C.blue, C.green, C.orange, C.cyan, C.pink, C.purple, C.indigo];
const SEG_C = [C.blue, C.purple, C.pink];
const PARTY_C = [C.orange, C.pink, C.magenta, C.cyan];
const GENDER_C = { Male: C.blue, Female: C.pink, Undetermined: C.purple };

function HBar({ value, max, color, h = 20 }) {
  return (
    <div style={{ width: "100%", height: h, background: "rgba(255,255,255,.06)", borderRadius: 4, overflow: "hidden" }}>
      <div style={{ width: `${max > 0 ? Math.max(value / max * 100, value > 0 ? 1.5 : 0) : 0}%`, height: "100%", background: color, borderRadius: 4, transition: "width .4s ease" }} />
    </div>
  );
}

function Card({ children, style }) {
  return <div style={{ background: C.card, borderRadius: 14, padding: "20px 22px", border: `1px solid ${C.border}`, ...style }}>{children}</div>;
}

function Head({ children, sub }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <h3 style={{ fontSize: 15, fontWeight: 700, color: C.text, margin: 0 }}>{children}</h3>
      {sub && <div style={{ fontSize: 11, color: C.dim, marginTop: 2 }}>{sub}</div>}
    </div>
  );
}

function GenderDonut({ data }) {
  const arr = Object.entries(data).map(([name, value]) => ({ name, value }));
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
      <div style={{ width: 120, height: 120, flexShrink: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart><Pie data={arr} cx="50%" cy="50%" innerRadius={36} outerRadius={56} dataKey="value" stroke="none" paddingAngle={2}>
            {arr.map((d, i) => <Cell key={i} fill={GENDER_C[d.name] || C.dim} />)}
          </Pie></PieChart>
        </ResponsiveContainer>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {arr.map(d => (
          <div key={d.name} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              minWidth: 30, height: 28, borderRadius: 7, padding: "0 6px",
              background: GENDER_C[d.name] || C.dim, color: "#fff", fontWeight: 800, fontSize: 13,
            }}>{Math.round(d.value)}</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.text }}>{d.name}</div>
              <div style={{ fontSize: 11, color: C.dim }}>{d.value.toFixed(1)}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SegDonut({ data }) {
  const arr = Object.entries(data).map(([name, value]) => ({ name, value }));
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
      <div style={{ width: 100, height: 100, flexShrink: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart><Pie data={arr} cx="50%" cy="50%" innerRadius={30} outerRadius={46} dataKey="value" stroke="none" paddingAngle={2}>
            {arr.map((_, i) => <Cell key={i} fill={SEG_C[i] || C.dim} />)}
          </Pie></PieChart>
        </ResponsiveContainer>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {arr.map((d, i) => (
          <div key={d.name} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: SEG_C[i], flexShrink: 0 }} />
            <span style={{ fontSize: 12, color: C.sub, minWidth: 120 }}>{d.name}</span>
            <span style={{ fontSize: 14, fontWeight: 700, color: C.text }}>{d.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfGrid({ data }) {
  const sorted = Object.entries(data).sort((a, b) => b[1] - a[1]);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
      {sorted.map(([name, val], i) => (
        <div key={name} style={{
          background: PROF_C[i % PROF_C.length] + "1A", border: `1px solid ${PROF_C[i % PROF_C.length]}33`,
          borderRadius: 10, padding: "12px 14px",
          flex: i < 6 ? "1 1 calc(16.6% - 6px)" : "1 1 100%", minWidth: i < 6 ? 85 : "auto", textAlign: "center",
        }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: PROF_C[i % PROF_C.length] }}>{Math.round(val)}%</div>
          <div style={{ fontSize: 10, color: C.sub, marginTop: 2, lineHeight: 1.3 }}>{name}</div>
        </div>
      ))}
    </div>
  );
}

function CommonGrid({ data }) {
  const gens = ["25–40", "41–56", "13–24", "57–75", "<12"];
  const allVals = Object.values(data).flatMap(g => Object.values(g));
  const maxV = Math.max(...allVals);
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "60px repeat(5, 1fr)", gap: 4, marginBottom: 4 }}>
        <div />
        {gens.map(g => <div key={g} style={{ fontSize: 10, fontWeight: 600, color: C.dim, textAlign: "center" }}>{g}</div>)}
      </div>
      {["Male", "Female"].map(gender => (
        <div key={gender} style={{ display: "grid", gridTemplateColumns: "60px repeat(5, 1fr)", gap: 4, marginBottom: 4, alignItems: "center" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.text }}>{gender}</div>
          {gens.map(gen => {
            const val = data[gender]?.[gen];
            const color = gender === "Male" ? C.green : C.pink;
            const op = val > 0 ? Math.max(0.25, val / maxV) : 0;
            return (
              <div key={gen} style={{
                background: val > 0 ? color : "transparent", opacity: val > 0 ? Math.max(0.35, op) : 1,
                borderRadius: 6, padding: "7px 2px", textAlign: "center",
                fontSize: 12, fontWeight: 700, color: val > 0 ? "#fff" : C.dim,
              }}>
                {val > 0 ? `${val.toFixed(1)}%` : "—"}
              </div>
            );
          })}
        </div>
      ))}
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 8 }}>
        <div style={{ width: 50, height: 5, borderRadius: 3, background: `linear-gradient(90deg, ${C.green}33, ${C.green})` }} />
        <span style={{ fontSize: 10, color: C.dim }}>Intensity = share of total respondents</span>
      </div>
    </div>
  );
}

function PartyBars({ data }) {
  const entries = Object.entries(data).sort((a, b) => b[1] - a[1]);
  const max = Math.max(...entries.map(e => e[1]));
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      {entries.map(([name, val], i) => (
        <div key={name} style={{ display: "grid", gridTemplateColumns: "120px 1fr 44px", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 11, color: C.sub, textAlign: "right" }}>{name}</span>
          <HBar value={val} max={max} color={PARTY_C[i % PARTY_C.length]} h={18} />
          <span style={{ fontSize: 12, fontWeight: 700, color: C.text }}>{val.toFixed(1)}%</span>
        </div>
      ))}
    </div>
  );
}

function ResearchGrid({ data }) {
  const entries = Object.entries(data).filter(([_, v]) => v > 0).sort((a, b) => b[1] - a[1]);
  const max = Math.max(...entries.map(e => e[1]));
  const half = Math.ceil(entries.length / 2);
  const renderCol = (items) => (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map(([name, val]) => (
        <div key={name} style={{ display: "grid", gridTemplateColumns: "110px 1fr 42px", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 11, color: C.sub, textAlign: "right" }}>{name}</span>
          <HBar value={val} max={max} color={C.blue} h={16} />
          <span style={{ fontSize: 12, fontWeight: 700, color: C.text }}>{val.toFixed(1)}%</span>
        </div>
      ))}
    </div>
  );
  return (
    <div style={{ display: "flex", gap: 20 }}>
      {renderCol(entries.slice(0, half))}
      {renderCol(entries.slice(half))}
    </div>
  );
}

function Takeaway({ d }) {
  const topG = Object.entries(d.gender).sort((a, b) => b[1] - a[1])[0];
  const topA = Object.entries(d.age).sort((a, b) => b[1] - a[1])[0];
  const topS = Object.entries(d.segmentInterest).sort((a, b) => b[1] - a[1])[0];
  const topP = Object.entries(d.shoppingParty).sort((a, b) => b[1] - a[1])[0];
  const res = Object.entries(d.research).sort((a, b) => b[1] - a[1]);
  const fSeg = d.genderSeg.Female;
  const mSeg = d.genderSeg.Male;
  const fTop = fSeg ? Object.entries(fSeg).sort((a,b)=>b[1]-a[1])[0] : null;
  const mTop = mSeg ? Object.entries(mSeg).sort((a,b)=>b[1]-a[1])[0] : null;
  const divergence = fTop && mTop && fTop[0] !== mTop[0];
  return (
    <div style={{ background: "linear-gradient(135deg, #1E293B 0%, #172035 100%)", borderRadius: 14, padding: "20px 22px", border: `1px solid ${C.border}`, display: "flex", gap: 14, alignItems: "flex-start" }}>
      <span style={{ fontSize: 26, flexShrink: 0, marginTop: 2 }}>💡</span>
      <div>
        <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 5 }}>Key Takeaway</div>
        <div style={{ fontSize: 12, color: C.sub, lineHeight: 1.75 }}>
          The dominant customer profile is a <b style={{ color: C.text }}>{topG[0]} aged {topA[0]} ({topG[1].toFixed(1)}%)</b> who visits the store <b style={{ color: C.text }}>{topP[0].toLowerCase()}</b>, is primarily interested in <b style={{ color: C.text }}>{topS[0]} ({topS[1]}%)</b>, and discovers the product through <b style={{ color: C.text }}>{res[0][0].toLowerCase()} ({res[0][1].toFixed(1)}%)</b> or <b style={{ color: C.text }}>{res[1][0].toLowerCase()} ({res[1][1].toFixed(1)}%)</b>.
          {divergence && <> A notable gender divergence appears in segment interest — female customers skew heavily toward <b style={{ color: C.text }}>{fTop[0]} ({fTop[1]}%)</b> rather than {mTop[0]}.</>}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [ch, setCh] = useState("All Channel");
  const [gf, setGf] = useState("All");
  const d = DATA[ch];
  const gfOpts = ["All", "Female", "Male", ...(d.gender.Undetermined != null ? ["Undetermined"] : [])];

  const seg = gf === "All" ? d.segmentInterest : (d.genderSeg[gf] || d.segmentInterest);
  const party = gf === "All" ? d.shoppingParty : (d.genderParty[gf] || d.shoppingParty);
  const research = gf === "All" ? d.research : (d.genderResearch[gf] || d.research);

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", background: C.bg, minHeight: "100vh", color: C.text, padding: "0 0 40px 0" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      <div style={{ maxWidth: 660, margin: "0 auto", padding: "28px 20px 0" }}>
        {/* Title */}
        <div style={{ display: "flex", gap: 12, marginBottom: 18 }}>
          <div style={{ width: 4, borderRadius: 2, background: C.blue, flexShrink: 0 }} />
          <div>
            <h1 style={{ fontSize: 21, fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>Meta Customer Profiles - Q1 '26</h1>
            <p style={{ fontSize: 11, color: C.dim, margin: "3px 0 0" }}>Demographic and behavioral segmentation analysis</p>
          </div>
        </div>

        {/* Channel tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 20 }}>
          {CHANNELS.map(c => (
            <button key={c} onClick={() => { setCh(c); setGf("All"); }} style={{
              padding: "6px 13px", borderRadius: 7, border: "none", cursor: "pointer", fontSize: 11, fontWeight: ch === c ? 700 : 500,
              fontFamily: "inherit", background: ch === c ? C.blue : C.card, color: ch === c ? "#fff" : C.sub, transition: "all .15s",
            }}>{c}</button>
          ))}
        </div>

        {/* Gender + Age */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
          <Card><Head sub={`n = ${d.nGender.toLocaleString()}`}>Gender Distribution</Head><GenderDonut data={d.gender} /></Card>
          <Card>
            <Head sub={`n = ${d.nAge.toLocaleString()}`}>Observed Age Distribution</Head>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {Object.entries(d.age).map(([name, val]) => {
                const max = Math.max(...Object.values(d.age));
                return (
                  <div key={name} style={{ display: "grid", gridTemplateColumns: "60px 1fr 40px", alignItems: "center", gap: 6 }}>
                    <span style={{ fontSize: 11, color: C.sub, textAlign: "right" }}>{name}</span>
                    <HBar value={val} max={max} color={C.blue} h={14} />
                    <span style={{ fontSize: 11, fontWeight: 700, color: C.text }}>{val.toFixed(1)}%</span>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Profession */}
        <Card style={{ marginBottom: 10 }}>
          <Head sub={`n = ${d.nProf.toLocaleString()}`}>Profession Breakdown</Head>
          <ProfGrid data={d.profession} />
        </Card>

        {/* Common Profiles */}
        <Card style={{ marginBottom: 10 }}>
          <Head sub={`n = ${d.nCommon.toLocaleString()} · Gender × Age cross-tab`}>Most Common Customer Profiles</Head>
          <CommonGrid data={d.common} />
        </Card>

        {/* Behavioral header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", margin: "18px 0 10px" }}>
          <div>
            <h2 style={{ fontSize: 17, fontWeight: 800, margin: 0 }}>Behavioral Segments</h2>
            <div style={{ fontSize: 11, color: C.dim, marginTop: 2 }}>Filter by gender segment</div>
          </div>
          <div style={{ display: "flex", gap: 3 }}>
            {gfOpts.map(f => (
              <button key={f} onClick={() => setGf(f)} style={{
                padding: "5px 12px", borderRadius: 6, border: "none", cursor: "pointer", fontSize: 11, fontWeight: gf === f ? 700 : 500,
                fontFamily: "inherit", background: gf === f ? C.blue : C.card, color: gf === f ? "#fff" : C.sub,
              }}>{f}</button>
            ))}
          </div>
        </div>

        {/* Segment + Party */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
          <Card>
            <Head sub={gf !== "All" ? `Filtered: ${gf}` : undefined}>Segment Interest</Head>
            <SegDonut data={seg} />
          </Card>
          <Card>
            <Head sub={gf !== "All" ? `Filtered: ${gf}` : undefined}>Shopping Party</Head>
            <PartyBars data={party} />
          </Card>
        </div>

        {/* Research */}
        <Card style={{ marginBottom: 10 }}>
          <Head sub={gf !== "All" ? `Filtered: ${gf}` : undefined}>Methods of Research</Head>
          <ResearchGrid data={research} />
        </Card>

        {/* Takeaway */}
        <Takeaway d={d} />

        <div style={{ marginTop: 20, textAlign: "center", fontSize: 10, color: C.dim }}>
          Field Data Collected 2/1/26 - 3/7/26 | 2,188 Total MSS Submissions
        </div>
      </div>
    </div>
  );
}
