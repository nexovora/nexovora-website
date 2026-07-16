import { MessageCircle } from "lucide-react";
import {
  locationDetails,
  whatsappContact,
} from "../../data/contactPageData";

function LocationPanel() {
  return (
    <aside className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
      <div className="p-7 sm:p-9">
        <h2 className="font-heading text-3xl font-bold text-slate-950">
          Our Location
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          Nexovora is based in Islamabad and works with clients across Pakistan
          and remotely.
        </p>
      </div>

      <div className="relative flex min-h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.08)_1px,transparent_1px)] bg-[size:30px_30px]"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute h-44 w-44 rounded-full border-[18px] border-blue-100"
          aria-hidden="true"
        />

        <div className="relative rounded-2xl border border-blue-100 bg-white px-7 py-6 text-center shadow-xl">
          <p className="font-heading text-xl font-bold text-slate-950">
            Islamabad, Pakistan
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Serving local and remote clients
          </p>
        </div>
      </div>

      <div className="grid gap-4 p-7 sm:p-9">
        {locationDetails.map(
          ({ title, value, description, icon: Icon }) => (
            <div
              key={title}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Icon size={20} aria-hidden="true" />
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-500">
                  {title}
                </p>

                <p className="font-heading mt-1 font-bold text-slate-950">
                  {value}
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  {description}
                </p>
              </div>
            </div>
          ),
        )}

        <div className="rounded-2xl bg-[#06142E] p-6 text-white">
          <p className="font-heading text-xl font-bold">
            Prefer a faster conversation?
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-300">
            Send us your project details directly through WhatsApp.
          </p>

          <a
            href={whatsappContact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-visible-ring mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </aside>
  );
}

export default LocationPanel;