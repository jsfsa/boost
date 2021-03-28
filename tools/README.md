# boost.js Tools

This is where publishing tool chains of Boost.js 

###  boost_pack.js

boost_pack.js is an executable script that written by node.js.
Its purpose is to generate pre-loaded packages.

Example usage:
```bash
./boost_pack.js resources/javascript 2345 require module3 > package2345.json
```
Parameter Descriptions:
./boost_pack.js <baseon_disk_path> <versionNumber> <requireName> module1 [module2 [mudule3 ...]] > <out_package_file_name>
