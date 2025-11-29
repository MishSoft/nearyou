"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Session } from '@supabase/supabase-js';
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabaseClient"
import signUpUser from "@/auth/signUpUser";
import { LoaderCircle } from "lucide-react";

const locations = [
  {
    city: "Tbilisi",
    cityLabel: "თბილისი",
    districts: [
      { value: "gldani", label: "გლდანი" },
      { value: "nadzaladevi", label: "ნაძალადევი" },
      { value: "didube", label: "დიდუბე" },
      { value: "chugureti", label: "ჩუღურეთი" },
      { value: "vake", label: "ვაკე" },
      { value: "saburtalo", label: "საბურთალო" },
      { value: "isani", label: "ისანი" },
      { value: "samgori", label: "სამგორი" },
      { value: "krtsanisi", label: "კრწანისი" },
      { value: "mtatsminda", label: "მთაწმინდა" },
    ],
  },
  {
    city: "Batumi",
    cityLabel: "ბათუმი",
    districts: [
      { value: "dzveli_batumi", label: "ძველი ბათუმი" },
      { value: "rustavelis_ubani", label: "რუსთაველის უბანი" },
      { value: "khimshiashvili", label: "ხიმშიაშვილი" },
      { value: "bagrationi", label: "ბაგრატიონი" },
      { value: "agmashenebeli", label: "აღმაშენებელი" },
      { value: "javakhishvili", label: "ჯავახიშვილი" },
      { value: "tamaris_dasaxleba", label: "თამარის დასახლება" },
      { value: "boni_gorodoki", label: "ბონი-გოროდოკი" },
      { value: "aeroporti_ubani", label: "აეროპორტის უბანი" },
      { value: "gonio_qvariati", label: "გონიო-კვარიათი" },
      { value: "kakhaberi", label: "კახაბერი" },
      { value: "mtsvane_konchi", label: "მწვანე კონცხი" },
    ],
  },
  {
    city: "Kutaisi",
    cityLabel: "ქუთაისი",
    districts: [
      { value: "avtokarkhana", label: "ავტოქარხანა" },
      { value: "gamajvreba", label: "გამარჯვება" },
      { value: "uqimerioni", label: "უქიმერიონი" },
      { value: "kalak_museumi", label: "ქალაქ-მუზეუმი (ცენტრი)" },
      { value: "sulhan_saba", label: "სულხან-საბა" },
      { value: "vakisubani", label: "ვაკისუბანი" },
      { value: "dzelkiani", label: "ძელქვიანი" },
      { value: "safichia", label: "საფიჩხია" },
      { value: "nikea", label: "ნიკეა" },
      { value: "balakhvani", label: "ბალახვანი" },
      { value: "gumati", label: "გუმათი" },
    ],
  },
  {
    city: "Rustavi",
    cityLabel: "რუსთავი",
    districts: [
      { value: "dzveli_rustavi", label: "ძველი რუსთავი" },
      { value: "akhali_rustavi", label: "ახალი რუსთავი" },
      { value: "marjvena_sanapiro", label: "მარცხენა სანაპირო" },
      { value: "marjvena_sanapiro_right", label: "მარჯვენა სანაპირო" },
      { value: "chkondideli", label: "ჭყონდიდელის დასახლება" },
      { value: "internati", label: "ინტერნატი" },
    ],
  },
  {
    city: "Zugdidi",
    cityLabel: "ზუგდიდი",
    districts: [
      { value: "centri", label: "ცენტრი" },
      { value: "kombinati", label: "კომბინატი" },
      { value: "gorki", label: "გორკი" },
      { value: "rike", label: "რიყე" },
      { value: "sapatrulos_ubani", label: "საპატრულოს უბანი" },
      { value: "engurkhagaldkombinati", label: "ენგურქაღალდკომბინატი" },
    ],
  },
  {
    city: "Gori",
    cityLabel: "გორი",
    districts: [
      { value: "centri", label: "ცენტრი" },
      { value: "kombinati", label: "კომბინატი" },
      { value: "verkhvebi", label: "ვერხვები" },
      { value: "tsminda_tsqali", label: "წმინდა წყალი" },
      { value: "sadguris_dasaxleba", label: "სადგურის დასახლება" },
      { value: "chalis_dasaxleba", label: "ჭალის დასახლება" },
    ],
  },
  {
    city: "Poti",
    cityLabel: "ფოთი",
    districts: [
      { value: "centri", label: "ცენტრი" },
      { value: "nabada", label: "ნაბადა" },
      { value: "kundzuli", label: "კუნძული" },
      { value: "maltaqva", label: "მალთაყვა" },
      { value: "7th_kilometri", label: "მე-7 კილომეტრი" },
    ],
  },
  {
    city: "Telavi",
    cityLabel: "თელავი",
    districts: [
      { value: "centri", label: "ცენტრი" },
      { value: "zuzumbo", label: "ზუზუმბო" },
      { value: "matsantsara", label: "მაწანწარა" },
      { value: "kavkasioni", label: "კავკასიონი" },
      { value: "alazani", label: "ალაზანი" },
    ],
  },
  {
    city: "Senaki",
    cityLabel: "სენაკი",
    districts: [
      { value: "centri", label: "ცენტრი" },
      { value: "sadguris_ubani", label: "სადგურის უბანი" },
      { value: "samkhiro_dasaxleba", label: "სამხედრო დასახლება" },
      { value: "matsxovris_kari", label: "მაცხოვრის კარი" },
    ],
  },
  {
    city: "Kobuleti",
    cityLabel: "კობულეთი",
    districts: [
      { value: "centri", label: "ცენტრი" },
      {
        value: "agmashenebelis_gamziri",
        label: "აღმაშენებლის გამზირი (სანაპირო ზოლი)",
      },
      { value: "sadguris_ubani", label: "სადგურის უბანი" },
      { value: "pichvnari", label: "პიჩვნარი" },
      { value: "gelauri", label: "გელაური" },
    ],
  },
];


export default function RegisterPage() {
  const router = useRouter()
  const [name, setname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassowrd] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        router.push('/dashboard')

      } else {
        setLoading(false)
      }
    })
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signUpUser(name, lastname, email, password, city, district)
    const { data, error } = await supabase
      .from('users')
      .select('id')
      .eq('email', email)
      .single()


    if (error) {
      console.log(error.message)
    }

    console.log(data?.id)

    if (result?.error) {
      console.log(result.error)
    } else {
      setMessage("Signup successful")
      setTimeout(() => {
        router.push('/dashboard')
      }, 2000)
    }

  };
  // if (loading) return null
  return (
    <div className="min-h-screen flex items-center justify-center  from-pink-50 via-white to-blue-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-6"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h1>
        {
          message && (
            <p className="text-center text-red-400 font-semibold">
              {message}
            </p>
          )
        }
        {/* Name + Surname */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            required
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            required
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password + Confirm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="password"
            placeholder="Password"
            className="p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            required
            value={password}
            onChange={(e) => setPassowrd(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* City + District */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <select
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
              setDistrict("");
            }}
            className="p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            required
          >
            <option value="" disabled>
              Select City
            </option>
            {locations.map((c) => (
              <option key={c.city} value={c.city}>
                {c.cityLabel}
              </option>
            ))}
          </select>

          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            required
            disabled={!city}
          >
            <option value="" disabled>
              Select District
            </option>
            {city &&
              locations
                .find((c) => c.city === city)
                ?.districts.map((d) => (
                  <option key={d.value} value={d.value}>
                    {d.label}
                  </option>
                ))}
          </select>
        </div>

        <button
          type="submit"
          className="mt-4 bg-green-400 text-white py-3 rounded-xl font-semibold shadow-md hover:from-pink-600 hover:to-pink-700 transition"
        >
          {loading ?
            <LoaderCircle size={25} className="animate-spin" />
            : "Register"}

        </button>

        <p className="text-center text-gray-500 mt-2">
          Already have an account?{" "}
          <Link href="/login" className="text-pink-500 hover:underline">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}


