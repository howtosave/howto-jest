# howto-jest

## try-catch

```js
  await expect(() => service.findOneOrCreate({ id: "invalid" }, null))
    .rejects.toThrow(/invalid param/i);
  
  await expect(() => service.findOneOrCreate({ id: "valud_but_unavailable" }, null))
    .rejects.toThrow(/not found/i);
```
