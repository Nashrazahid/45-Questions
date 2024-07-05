function describe_city(city, country) {
    if (city === void 0) { city = "karachi"; }
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("karachi");
describe_city("islamabad");
describe_city("multan");
