# Triploit C++ Code Convention

* [1. Headers &amp; Including](#1-headers--including)
  * [Include Guards](#include-guards)
* [2. Classes](#2-classes)
  * [Private Scope](#private-scope)
  * [Public Scope](#public-scope)
* [3. Functions](#3-functions)
* [4. Namespaces](#4-namespaces)
  * [Using](#using)
  * [Declaring](#declaring)
* [5. Statements](#5-statements)
  * [Long Statements](#long-statements)

## 1. Headers & Including

Include headers in the following order:

```cpp
#include <standard c++ libraries>
...

#include <system specific or extra installed libraries>
...

#include "own libraries"
...
```

### Include Guards

Define headers always with include guards:

```cpp
#ifndef _CLASS_OR_SOME_OTHER_NAME_HPP
#define _CLASS_OR_SOME_OTHER_NAME_HPP
...
#endif
```

For example:

```cpp
#ifndef _DOG_HPP
#define _DOG_HPP

#include "animal.hpp"

class Dog
{
    ...
};

#endif
```

## 2. Classes

If you declare functions, use getters and setters. If you want to edit the value before returning, this is the perfect way. They are not necessary, but helpful.

```cpp
class Name
{
private:
    int x;
    int y;

public:
    int getX()
    {
        return x;
    }

    int getY()
    {
        return y;
    }
};
```

### Private Scope

Define variables and functions in lowercase with underscores if needed:

```cpp
private:
    std::string realy_long_name;

    int do_something_private()
    {
        return realy_long_name.size();
    }
```

Don't use lowerCamelCase here!

### Public Scope

Only functions are allowed here, never declare variables!
Write all functions in lowerCamelCase like the following:

```cpp
public:
    std::string getLongName()
    {
        return realy_long_name;
    }

    void setLongName(const std::string &name)
    {
        realy_long_name = name;
    }
```

## 3. Functions

Name functions in lowerCamelCase and use Call by reference functions. In functions, that take a longer time, you should use call by value and you should never edit arguments. It's a bad code style. So every time you can, you should use constant references. 

```cpp
int ret(const &int i)
{
    return i;
}
```

Return objects like normal types:

```cpp
class Object
{
public:
    Object(const std::string &s)
    {
        std::cout << s << std::endl;
    }
};

Object returnObj()
{
    return Object("Hi");
}

int main(int argc, char* argv[])
{
    Object o = returnObj();
}
```

You can also return const Objects.

## 4. Namespaces

### Using

Don't `use` namespaces!  
Don't do this:

```cpp
...
using namespace std;
...
```

Using namespaces is adversely, because some functions in namespaces are called the same or some names you want to define, are already defined. So never `use` a namespace!

### Declaring

Declare namespaces always in lowercase, with underscores if needed. This also applies to the variables and functions in this namespace. Don't use lowerCameCase here.

```cpp
namespace my_cool_namespace
{
    int my_cool_varible;
    int some_different;

    std::string do_something_cool()
    {
        return "cool!";
    }
}
```

## 5. Statements

Some examples how statements should look like:

```cpp
if (a == true)
{
    a = false;
}
else if (a == false)
{
    a = true;
}
else
{
    // do, what to do
}
```

```cpp
switch (i)
{
    case 1:
        i++;
        break;
    case 2:
        i--;
        break;
    default:
    doNothing();
    break;
}
```

```cpp
while (true)
{
    std::cout << "Hello endless loop!" << std::endl;
}
```

### Long statements

If you have more than 2 statements, break them in each a new line:

```cpp
if (a.getValue() == 1 ||
    a.getSecondValue() == 2 ||
    a.getThirdValue() == 3 ||
    a.getFourthValue() == 4)
{
    std::cout << "Hello World!" << std::endl;
}
```