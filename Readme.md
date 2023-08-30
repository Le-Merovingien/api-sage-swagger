# Sage API _2.0.8_

## API Error structure :
```
{
    "error": {
        "code": Integer,
        "errors": [
            {
                "reason": String,
                "message": String,
                "detail": Optional Object
            }
        ]
    }
}
```
## Errors Codes :

| Code | Reason            | Message                                                             | 
|------|-------------------|---------------------------------------------------------------------|
| 400  | badRequest        | Bad body format, JSON expected.                                     | 
| 400  | badBodyRequest    | Cannot parse JSON                                                   |           
| 400  | invalidArgument   | Invalid Argument.  [see](#Invalid-argument-detail-content)          |                                        
| 404  | notFound          | Object not found.                                                   |      
| 500  | sageConnect       | Unable to connect to Sage, please check the API settings.           |           
| 500  | sqlConnect        | Unable to connect to Sage database, please check the API settings.  |           
| 500  | sageError         | Sage library error.                                                 |      
| 422  | objectInUse       | Object in use in Sage.                                              |  
| 422  | tableLock         | Table locked by Sage.                                               |  
| 422  | duplicateKey      | Duplicate key.                                                      |  
| 500  | sqlInterpretation | Bad SQL Request.                                                    |  

## Invalid argument detail content


**NotNull :**

```
{
    "detail": {
        "message": "Field must be not null or empty.",
        "field": <FieldName>
    }
}
```

**Length Minimum:**

```
{
    "detail": {
        "message": "Field must be at least X character",
        "field": <FieldName>
    }
}
```

**Length Maximum:**
```
{
    "detail": {
        "message": "Field must be a maximum of X character",
        "field": <FieldName>
    }
}
```

**Greather than:**
```
{
    "detail": {
        "message": "Value must be greather than X",
        "field": <FieldName>
    }
}
```

**Greather than or Equal:**
```
{
    "detail": {
        "message": "Value must be greather than or equal to X",
        "field": <FieldName>
    }
}
```

**Object not exist :**
```
{
    "detail": {
        "message": "Object already exists",
        "field": <FieldName>
    }
}
```

**Between : **
```
{
    "detail": {
        "message": "Value must be between A and B",
        "field": <FieldName>
    }
}
```

**In :**
```
{
    "detail": {
        "message": "Bad value.",
        "field": <FieldName>
    }
}
```

**Type :**
```
{
    "detail": {
        "message": "Wrong type T",
        "field": <FieldName>
    }
}
```

**Valid Date : **
```
{
    "detail": {
        "message": "Incorrect date format, expected format : YYYYMMDD",
        "field": <FieldName>
    }
}
```

**Date Greather Than :**
```
{
    "detail": {
        "message": "Date must be greather",
        "field": <FieldName>,
        "than": <ComparaisonDateFieldName>
    }
}
```

**Array size >= 1:**
```
{
    "detail": {
        "message": "The array must contain at least 1 item",
        "field": <FieldName>
    }
}
```

## Windev Error Structure:
```
{
    "fault": {
        "faultcode": String,
        "faultstring": String,
        "detail": String
    }
}
```