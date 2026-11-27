# Component Library++

A small React component library: Badge, Banner, Card, Testimonial, Tooltip and Toast, plus a basic Button. Built with Vite.

## Getting Started

```
npm install
npm start
```

Open the address printed by Vite. [index.jsx](./index.jsx) acts as a testing ground that displays every component.

## Project Structure

```
components/
  Badge/        Badge.jsx        index.js
  Banner/       Banner.jsx       index.js
  Button/       Button.jsx
  Card/         Card.jsx         index.js
  Testimonial/  Testimonial.jsx  index.js
  Toast/        Toast.jsx        index.js
  Tooltip/      Tooltip.jsx      index.js
hooks/          useToggle.js, useEffectOnUpdate.js (standalone helpers)
style.css       all component styles
index.jsx       testing ground
```

Each component is exported from its own containing folder:

```jsx
import Badge from "./components/Badge";
```

## Dependencies

- `react` / `react-dom` 18.2.0
- `classnames` for combining class names
- `react-icons` ^4.4.0 (Bootstrap Icons set, `react-icons/bs`)

## Components

### Badge

A small colored label.

| Prop        | Type                                                                               | Default  | Description      |
| ----------- | ---------------------------------------------------------------------------------- | -------- | ---------------- |
| `color`     | `gray` \| `red` \| `yellow` \| `green` \| `blue` \| `indigo` \| `purple` \| `pink` | `gray`   | Badge color      |
| `shape`     | `square` \| `pill`                                                                 | `square` | Corner style     |
| `className` | string                                                                             | –        | Extra class name |

```jsx
<Badge color="green" shape="pill">
  Active
</Badge>
```

### Banner

A status message that spans its container. It renders as multi-line when `children` is provided, and as single-line otherwise.

| Prop        | Type                                           | Default   | Description            |
| ----------- | ---------------------------------------------- | --------- | ---------------------- |
| `variant`   | `success` \| `warning` \| `error` \| `neutral` | `neutral` | Color and icon         |
| `title`     | node                                           | –         | Heading text           |
| `children`  | node                                           | –         | Detail text (optional) |
| `className` | string                                         | –         | Extra class name       |

```jsx
<Banner variant="success" title="Congratulations!">Your account is ready.</Banner>
<Banner variant="error" title="There is a problem with your application" />
```

### Card

A card with an icon that overlaps its top edge. The shadow grows on hover.

| Prop        | Type   | Description                                                  |
| ----------- | ------ | ------------------------------------------------------------ |
| `icon`      | node   | Icon shown in the blue square (e.g. a `react-icons` element) |
| `title`     | node   | Heading                                                      |
| `children`  | node   | Description                                                  |
| `className` | string | Extra class name                                             |

```jsx
<Card icon={<BsCloudArrowUp />} title="Easy Deployment">
  A short description.
</Card>
```

### Testimonial

Without `image`, it renders a simple centered layout. With `image`, it renders a blue layout with an overlapping photo. Both layouts adapt to mobile screens (≤ 600px).

| Prop        | Type   | Description                                   |
| ----------- | ------ | --------------------------------------------- |
| `image`     | string | Photo URL. When set, the photo layout is used |
| `logo`      | node   | Logo above the quote (centered layout only)   |
| `quote`     | string | Quote text                                    |
| `name`      | string | Person's name                                 |
| `role`      | string | Job title / company                           |
| `className` | string | Extra class name                              |

```jsx
<Testimonial image="/may.jpg" quote="Fantastic." name="May Andersons" role="Workcation, CTO" />
<Testimonial logo={<strong>Workcation</strong>} quote="Fantastic." name="May Andersons" role="Workcation, CTO" />
```

### Tooltip

An info box with an icon, title, text, a close button and a small arrow at the bottom.

| Prop        | Type                                  | Default       | Description                         |
| ----------- | ------------------------------------- | ------------- | ----------------------------------- |
| `color`     | `gray` \| `blue` \| `pink` \| `green` | `gray`        | Color                               |
| `variant`   | `bold` \| `light`                     | `bold`        | Dark or light style                 |
| `title`     | node                                  | –             | Heading                             |
| `children`  | node                                  | –             | Body text                           |
| `icon`      | node                                  | `<BsInbox />` | Icon on the left                    |
| `onClose`   | function                              | –             | Called when the × button is clicked |
| `className` | string                                | –             | Extra class name                    |

```jsx
<Tooltip
  color="blue"
  variant="light"
  title="Archive notes"
  onClose={handleClose}
>
  Lorem ipsum dolor sit amet.
</Tooltip>
```

### Toast

A popup notification. It can dismiss itself via `duration`.

| Prop        | Type                                               | Default       | Description                                   |
| ----------- | -------------------------------------------------- | ------------- | --------------------------------------------- |
| `variant`   | `success` \| `warning` \| `error` \| `information` | `information` | Color and icon                                |
| `title`     | node                                               | –             | Heading                                       |
| `children`  | node                                               | –             | Message                                       |
| `duration`  | number (ms)                                        | –             | Time before `onClose` is called automatically |
| `onClose`   | function                                           | –             | Called when `duration` elapses                |
| `className` | string                                             | –             | Extra class name                              |

Toast keeps no state of its own. The parent decides whether it is shown. Wrap it in `.toast-container` to place it in the top-right corner.

```jsx
{
  show && (
    <div className="toast-container">
      <Toast
        variant="success"
        title="Success"
        duration={3000}
        onClose={() => setShow(false)}
      >
        Your work has been saved
      </Toast>
    </div>
  );
}
```

Pass a stable callback (e.g. via `useCallback`) as `onClose` so the timer isn't reset on every render.

### Button

| Prop        | Type                               | Description                              |
| ----------- | ---------------------------------- | ---------------------------------------- |
| `size`      | `sm` \| `lg`                       | Size. Omit for the default size          |
| `variant`   | `success` \| `warning` \| `danger` | Color. Omit for the default gray         |
| other props | –                                  | Passed through to the `<button>` element |

```jsx
<Button size="lg" variant="success">
  Save
</Button>
```

### Menu

A compound component made of `Menu.Button`, `Menu.Dropdown` and `Menu.Item`. The dropdown is open initially, and `Menu.Button` toggles it.

| Prop     | Type     | Description                         |
| -------- | -------- | ----------------------------------- |
| `onOpen` | function | Called whenever the menu is toggled |

```jsx
<Menu onOpen={() => console.log("toggled")}>
  <Menu.Button>Menu</Menu.Button>
  <Menu.Dropdown>
    <Menu.Item>Item 1</Menu.Item>
    <Menu.Item>Item 2</Menu.Item>
  </Menu.Dropdown>
</Menu>
```

## Adding a New Component

1. Create a folder `components/ComponentName/` containing `ComponentName.jsx`.
2. Add an `index.js` with `import X from "./X"; export default X`.
3. Add styles to [style.css](./style.css) using a unique class prefix (e.g. `.badge-*`).
4. Display the component in `index.jsx` to try it out.

Note: [style.css](./style.css) has a global rule for the `button` element. Custom buttons inside components (e.g. the Tooltip close button) need to override it.

## About Scrimba

At Scrimba our goal is to create the best possible coding school at the cost of a gym membership! 💜
If we succeed with this, it will give anyone who wants to become a software developer a realistic shot at succeeding, regardless of where they live and the size of their wallets 🎉
The Fullstack Developer Path aims to teach you everything you need to become a Junior Developer, or you could go further with one of our advanced courses 🚀

- [Our courses](https://scrimba.com/courses)
- [The Frontend Career Path](https://scrimba.com/fullstack-path-c0fullstack)
- [Become a Scrimba Pro member](https://scrimba.com/pricing)

Happy Coding!
