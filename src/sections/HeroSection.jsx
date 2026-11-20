import CarPrice from "../components/CarPrice";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Gauge,
  Pause,
  Play,
  Timer,
  Zap,
} from "lucide-react";
import { cars } from "../data/cars";
import { editorialImage } from "../data/media";

const spotlights = [
  {
    car: cars.find((car) => car.id === "aventador-svj"),
    title: ["Aventador", "SVJ"],
    copy: "A naturally aspirated V12. Active aerodynamics. The last, loudest chapter of the Aventador.",
  },
  {
    car: cars.find((car) => car.id === "sf90-stradale"),
    title: ["SF90", "Stradale"],
    copy: "Three electric motors meet a twin-turbo V8 in Ferrari’s all-wheel-drive hybrid.",
  },
  {
    car: cars.find((car) => car.id === "mclaren-765lt"),
    title: ["McLaren", "765LT"],
    copy: "Carbon fiber, a stretched tail and a twin-turbo V8 give the Longtail its character.",
  },
  {
    car: cars.find((car) => car.id === "911-gt3-rs"),
    title: ["911", "GT3 RS"],
    copy: "A high-revving flat-six and an active rear wing bring Porsche’s track engineering to the road.",
  },
];

const slideDuration = 6500;
const motionPreference = "(prefers-reduced-motion: reduce)";
const metrics = [
  { Icon: Zap, label: "Power output", read: (car) => car.hp, unit: "hp" },
  {
    Icon: Timer,
    label: "0–100 km/h",
    read: (car) => car.acceleration.toFixed(1),
    unit: "s",
  },
  {
    Icon: Gauge,
    label: "Top speed",
    read: (car) => car.topSpeed,
    unit: "km/h",
  },
];

export default function HeroSection() {
  const images = useRef([]);
  const [requested, setRequested] = useState(0);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(
    () =>
      typeof window !== "undefined" &&
      !window.matchMedia(motionPreference).matches,
  );
  const [overProfile, setOverProfile] = useState(false);
  useEffect(() => {
    if (requested === active) return;
    let current = true;
    const image = images.current[requested];
    async function showWhenReady() {
      try {
        await image.decode();
      } catch {
        if (current && image.naturalWidth === 0) image.src = "/car-outline.svg";
      }
      if (current) setActive(requested);
    }
    showWhenReady();
    return () => {
      current = false;
    };
  }, [requested, active]);

  useEffect(() => {
    const preference = window.matchMedia(motionPreference);
    const onPreferenceChange = () => setPlaying(!preference.matches);
    preference.addEventListener("change", onPreferenceChange);
    return () => preference.removeEventListener("change", onPreferenceChange);
  }, []);

  useEffect(() => {
    if (!playing || overProfile || requested !== active) return;
    let timer;
    function schedule() {
      window.clearTimeout(timer);
      if (!document.hidden) {
        timer = window.setTimeout(
          () => setRequested((active + 1) % spotlights.length),
          slideDuration,
        );
      }
    }
    schedule();
    document.addEventListener("visibilitychange", schedule);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("visibilitychange", schedule);
    };
  }, [active, requested, playing, overProfile]);

  const { car } = spotlights[active];
  const change = (step) =>
    setRequested(
      (index) => (index + step + spotlights.length) % spotlights.length,
    );

  return (
    <section
      className="spotlight"
      aria-label="Featured machines"
      aria-roledescription="carousel"
    >
      <div className="spotlight__stage">
        <div className="spotlight__artwork">
          {spotlights.map(({ car: model }, index) => (
            <img
              key={model.id}
              ref={(node) => {
                images.current[index] = node;
              }}
              className="spotlight__art"
              data-active={index === active}
              aria-hidden={index !== active}
              src={editorialImage(model.image)}
              alt={`${model.brand} ${model.model} editorial illustration`}
              decoding="async"
              fetchPriority={index === 0 ? "high" : "low"}
            />
          ))}
        </div>
        <div className="spotlight__shade" />
        <div className="page-container spotlight__layout">
          <div className="spotlight__copy">
            <p className="issue-label">
              <span className="racing-rule" /> Model spotlight
            </p>
            <div className="spotlight__captions">
              {spotlights.map(({ car: model, title, copy }, index) => (
                <div
                  key={model.id}
                  className="spotlight__caption"
                  data-active={index === active}
                  aria-hidden={index !== active}
                >
                  <p className="spotlight__make">{model.brand}</p>
                  <h1 aria-label={model.model}>
                    {title[0]}
                    <br />
                    <em>
                      {title[1]}
                      <span>.</span>
                    </em>
                  </h1>
                  <p className="spotlight__summary">{copy}</p>
                  <CarPrice price={model.price} />
                </div>
              ))}
            </div>
            <Link
              className="profile-button"
              to={`/collection/${car.id}`}
              onPointerEnter={(event) =>
                setOverProfile(event.pointerType === "mouse")
              }
              onPointerLeave={() => setOverProfile(false)}
              onFocus={() => setPlaying(false)}
            >
              Explore model
            </Link>
          </div>
        </div>
      </div>
      <div className="telemetry">
        <div className="page-container telemetry__inner">
          <dl className="telemetry__metrics">
            {metrics.map(({ Icon, label, read, unit }) => (
              <div key={label} className="telemetry__metric">
                <Icon size={22} strokeWidth={1.4} aria-hidden="true" />
                <div>
                  <dt>{label}</dt>
                  <dd>
                    <span className="telemetry__values">
                      {spotlights.map(({ car: model }, index) => (
                        <span
                          key={model.id}
                          className="telemetry__value"
                          data-active={index === active}
                          aria-hidden={index !== active}
                        >
                          {read(model)}
                        </span>
                      ))}
                    </span>
                    <small>{unit}</small>
                  </dd>
                </div>
              </div>
            ))}
          </dl>
          <div className="spotlight__controls">
            <span className="spotlight__count" aria-hidden="true">
              <b>{String(active + 1).padStart(2, "0")}</b> /{" "}
              {String(spotlights.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              aria-label={playing ? "Pause slideshow" : "Play slideshow"}
              onClick={() => setPlaying((value) => !value)}
            >
              {playing ? <Pause size={16} /> : <Play size={16} />}
            </button>
            <button
              type="button"
              aria-label="Previous featured model"
              onClick={() => change(-1)}
            >
              <ChevronLeft size={19} />
            </button>
            <button
              type="button"
              aria-label="Next featured model"
              onClick={() => change(1)}
            >
              <ChevronRight size={19} />
            </button>
          </div>
          <span
            className="visually-hidden"
            aria-live={playing ? "off" : "polite"}
            aria-atomic="true"
          >
            {car.brand} {car.model}, {active + 1} of {spotlights.length}
          </span>
        </div>
      </div>
    </section>
  );
}
